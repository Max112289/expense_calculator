import React, { FC, useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import ToggleButton from '../components/ToggleButton'

interface Props {
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    isModalVisible: boolean
}

const ModalAddPayments: FC<Props> = ({setModalVisible, isModalVisible}) => {
    const [inputType, setInputType] = useState<'card' | 'phone'>('card'); // Состояние для выбора между номером карты и телефона
    const [bank, setBank] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [comment, setComment] = useState('');

    const handleSave = () => {
        console.log({ bank, cardNumber, phoneNumber, comment });
        // Очистка полей после сохранения
        setBank('');
        setCardNumber('');
        setPhoneNumber('');
        setComment('');
        setModalVisible(false);
    };
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Добавить реквизиты</Text>

                <TextField
                    style={styles.textField}
                    placeholder="Ваш банк"
                    value={bank}
                    onChangeText={setBank}
                />

                <View style={styles.toggleContainer}>
                    <ToggleButton
                        title='Карта'
                        isTogled={inputType === 'card'}
                        onPress={() => setInputType('card')}
                        buttonToggledStyle={styles.activeToggleButton}
                        textToggledStyle={{color: '#fff'}}
                        textStyle={{color: '#a3a'}}
                        iconLeft={
                            <Feather
                                name="credit-card"
                                size={18} color={
                                    inputType === 'card' ? '#fff' : '#a3a'
                                }
                            />
                        }
                    />

                    <ToggleButton
                        title='Телефон'
                        isTogled={inputType === 'phone'}
                        onPress={() => setInputType('phone')}
                        buttonToggledStyle={styles.activeToggleButton}
                        textToggledStyle={{color: '#fff'}}
                        textStyle={{color: '#a3a'}}
                        iconLeft={
                            <MaterialIcons
                                name="phone"
                                size={18} color={
                                    inputType === 'phone' ? '#fff' : '#a3a'
                                }
                            />
                        }
                    />
                </View>

                       
                {inputType === 'card' ? (
                    <TextField
                        style={styles.textField}
                        placeholder="Номер карты"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                    />
                ) : (
                    <TextField
                        style={styles.textField}
                        placeholder="Номер телефона"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                )}

                <TextField
                    style={styles.textField}
                    placeholder="Комментарий"
                    value={comment}
                    onChangeText={setComment}
                />

                <View style={styles.modalButtons}>
                    <Button
                        title="Отмена"
                        onPress={() => { setModalVisible(prev => !prev); }}
                        buttonStyle={{
                            flex: 1,
                            backgroundColor: '#0000'
                        }}
                        textStyle={{color: '#f00'}}
                    />


                    <Button
                        title="Сохранить"
                        onPress={handleSave}
                        buttonStyle={{
                            flex: 1
                        }}
                    />
                            
                            
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    textField: {
        backgroundColor: '#f1f1f1',
        borderColor: '#a3a3',
        borderWidth: 1,
        fontFamily: 'Balsamiq',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#f1f1f1',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        gap: 20
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Balsamiq',
        color: '#a3a'
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    activeToggleButton: {
        backgroundColor: '#a3a'
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 20
    }
})

export default ModalAddPayments
