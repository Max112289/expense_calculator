import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '@/app/components/Button';
import FieldSection from '@/app/components/FieldSection';
import TextField from '@/app/components/TextField';
import { useAuth } from '@/app/context/AuthContext';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import ModalAddPayments from '@/app/modals/ModalAddPayments';
import { useUser } from '@/app/hoocks/useUser';
import ImageField from '@/app/components/ImageField';

const Profile = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const { logout } = useAuth();
    const { user } = useUser();

    const handleLogout = () => {
        logout();
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <ScrollView style={styles.container}>
            <FieldSection title="Персональные данные">
                <ImageField title='Нажмите на фото, чтоб загрузить новое.' />
                <TextField placeholder="Имя" value={user?.firstName} style={styles.textField} />
                {/* <TextField placeholder="Фамилия" value={user?.lastName} style={styles.textField} /> */}
                <Button title='Сохранить' />
                {/* <Button title='Отменить изменения' textStyle={{color: '#f00'}} buttonStyle={{backgroundColor: '#0000'}} /> */}
            </FieldSection>

            {/* <FieldSection title="Реквизиты">

                {user?.paymentDetails?.map((paymentDetail, index) => (
                    <View key={index} style={{flexDirection: 'row', backgroundColor: '#fd00', padding: 10, alignItems: 'center'}}>

                        <View style={{flex: 1, gap: 10}}>

                            <Text style={{fontFamily: 'Balsamiq', fontSize: 20}}>{paymentDetail.bank}</Text>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <MaterialIcons
                                    name={paymentDetail.type === 'card' ? 'credit-card' : 'phone'}
                                    style={{
                                        fontSize: 20,
                                        color: '#082'
                                    }}
                                />
                                <Text>{paymentDetail.value}</Text>
                            </View>

                        </View>
                        
                        <Button iconRight={<MaterialIcons name='delete' size={20} color="#f00" />} buttonStyle={{width: 'auto', backgroundColor: '#0000'}} />
                    </View>
                ))}

                <Button title="Добавить" buttonStyle={{ backgroundColor: '#a3a' }} onPress={toggleModal} />
            </FieldSection> */}

            <View style={styles.containerData}>
                <Button
                    title="Выйти из аккаунта"
                    onPress={handleLogout}
                    buttonStyle={{ backgroundColor: '#0000' }}
                    textStyle={{ color: '#f00' }}
                />
            </View>

            <ModalAddPayments setModalVisible={setModalVisible} isModalVisible={isModalVisible} />
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
    },
    containerData: {
        gap: 10,
        padding: 20,
    },
    textField: {
        backgroundColor: '#f1f1f1',
        borderColor: '#a3a3',
        borderWidth: 1,
        fontFamily: 'Balsamiq',
    },
});

export default Profile;
