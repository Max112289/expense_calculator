import { createFinance } from '@/app/apiController/addFinance'
import Button from '@/app/components/Button'
import FieldSection from '@/app/components/FieldSection'
import TextField from '@/app/components/TextField'
import { useAuth } from '@/app/context/AuthContext'
import { useUser } from '@/app/hoocks/useUser'
import { InfographyStackParamList } from '@/app/navigation/Stacks/InfographyStack'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Infography = () => {
    const { user, handleUpdateFinance } = useUser();
    const { token } = useAuth();
    const [financeName, setFinanceName] = React.useState('');

    const navigate = useNavigation<NavigationProp<InfographyStackParamList>>();

    const handleCreateFinance = () => {
        if (!user?.id || !token) return;
        createFinance(financeName, user.id, token).then((response) => {
            console.log(response)
            handleUpdateFinance();
        });
    }
    
    const handleOpenHistory = (id: number, name: string, documentId: string) => {
        navigate.navigate('History', { id, name, documentId });
    }

    return (
        <ScrollView>
            <FieldSection title='Мои счета'>
                {user?.bills?.map((bill, index) => (
                    <TouchableOpacity onPress={() => handleOpenHistory(bill.id, bill.name, bill.documentId)} key={index} style={{flexDirection: 'row', backgroundColor: '#fd00', padding: 10, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', backgroundColor: '#fd00', padding: 10, alignItems: 'center'}}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', gap: 10}}>
                                <Text style={styles.text}>{bill.name}</Text>
                                <Text style={styles.balance}>Открыть</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}


                <View style={{gap: 20}}>
                    {user?.bills?.length === 0 &&
                        <>
                            <Text style={styles.text}>У вас ещё нет счёта, но можно создать</Text>
                        </>
                    }

                    <TextField value={financeName} onChangeText={setFinanceName} placeholder='Название нового счёта' style={styles.textField} />
                    <Button onPress={handleCreateFinance} title='Создать счёт' buttonStyle={{backgroundColor: '#a3a'}} />
                </View>
            </FieldSection>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textField: {
        backgroundColor: '#f1f1f1',
        borderColor: '#a3a3',
        borderWidth: 1,
        fontFamily: 'Balsamiq',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Balsamiq',
        fontSize: 18,
        color: '#333'
    },
    balance: {
        fontFamily: 'Balsamiq',
        fontSize: 18,
        color: '#082'
    }
})

export default Infography
