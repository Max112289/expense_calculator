import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { useRoute, RouteProp, NavigationProp, useNavigation } from '@react-navigation/native';
import FieldSection from '@/app/components/FieldSection';
import TextField from '@/app/components/TextField';
import Button from '@/app/components/Button';
import { useAuth } from '@/app/context/AuthContext';
import { InfographyStackParamList } from '@/app/navigation/Stacks/InfographyStack';
import createFinanceHistory from '@/app/apiController/addHistory';
import { getFinanceHistoriesByFinanceId } from '@/app/apiController/getFinanceHistory';
import deleteFinance from '@/app/apiController/deleteFinance'; // Функция удаления счёта
import { useUser } from '@/app/hoocks/useUser';

const History = () => {
    const route = useRoute<RouteProp<InfographyStackParamList>>();
    const { token } = useAuth();
    const [operationName, setOperationName] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [historyList, setHistoryList] = React.useState<any[]>([]);

    const navigator = useNavigation<NavigationProp<InfographyStackParamList>>();

    const { handleUpdateFinance } = useUser();

    // Функция для добавления новой операции
    const handleAddHistory = () => {
        if (!token || !route.params?.documentId) return;

        createFinanceHistory(token, {
            date: new Date().toISOString(),
            amount: Number(amount),
            type: operationName,
            finance: route.params?.documentId,
        }).then((response) => {
            setHistoryList((prev) => [...prev, response.data]);
            setOperationName('');
            setAmount('');
        }).catch((error) => {
            console.error('Failed to create history:', error);
        });
    };

    // Получаем список операций при загрузке
    useEffect(() => {
        if (route.params?.id && token) {
            getFinanceHistoriesByFinanceId(route.params.id, token).then((response) => {
                setHistoryList(response.data);
            }).catch((error) => {
                console.error('Failed to fetch histories:', error);
            });
        }
    }, [route.params?.id, token]);

    // Удаление счёта с подтверждением
    const handleDeleteFinance = () => {
        if (!token || !route.params?.id) return;

        Alert.alert(
            'Подтверждение удаления',
            `Вы уверены, что хотите удалить счёт "${route.params?.name}"?`,
            [
                { text: 'Отмена', style: 'cancel' },
                { 
                    text: 'Удалить', 
                    style: 'destructive', 
                    onPress: () => {
                        deleteFinance(route.params?.documentId, token)
                            .then(() => {
                                Alert.alert('Успех', 'Счёт успешно удалён');
                                navigator.goBack();
                                handleUpdateFinance();
                            })
                            .catch((error) => {
                                console.error('Failed to delete finance:', error);
                                Alert.alert('Ошибка', 'Не удалось удалить счёт');
                            });
                    } 
                },
            ]
        );
    };

    // Вычисляем общую сумму операций
    const totalAmount = historyList.reduce((sum, operation) => sum + operation.amount, 0);

    return (
        <ScrollView>
            <FieldSection title={route.params?.name || 'История операций'}>
                <Text style={styles.totalAmount}>
                Накопления: {totalAmount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
                </Text>
                <Button 
                    title='Удалить счёт' 
                    buttonStyle={{ backgroundColor: '#f000' }} 
                    textStyle={{ color: '#f00' }} 
                    onPress={handleDeleteFinance} 
                />
            </FieldSection>

            <FieldSection title='Добавить операцию'>
                <View style={{ gap: 10 }}>
                    <TextField
                        value={operationName}
                        onChangeText={setOperationName}
                        placeholder='Название операции'
                        style={styles.textField}
                    />
                    <TextField
                        value={amount}
                        onChangeText={setAmount}
                        placeholder='Сумма'
                        style={styles.textField}
                        // keyboardType='numeric'
                    />
                    <Button
                        onPress={handleAddHistory}
                        title='Добавить'
                        buttonStyle={{ backgroundColor: '#a3a' }}
                    />
                </View>
            </FieldSection>

            <FieldSection title='История операций'>
            {historyList.map((operation) => (
    <View key={operation.id} style={styles.operationItem}>
        <Text style={[
            styles.operationText, 
            operation.amount > 0 ? { color: '#082' } : { color: '#f00' }
        ]}>
            {operation.type}: {operation.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
        </Text>
        <Text style={styles.operationDate}>{operation.date}</Text>
    </View>
))}

            </FieldSection>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textField: {
        backgroundColor: '#f1f1f1',
        borderColor: '#a3a3',
        borderWidth: 1,
        fontFamily: 'Balsamiq',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Balsamiq',
        color: '#082',
    },
    operationItem: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    operationText: {
        fontSize: 16,
    },
    operationDate: {
        fontSize: 12,
        color: '#888',
    },
});

export default History;
