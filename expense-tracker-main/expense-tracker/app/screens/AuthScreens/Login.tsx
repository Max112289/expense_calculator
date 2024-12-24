import { loginUser } from '@/app/apiController/login'
import Button from '@/app/components/Button'
import TextField from '@/app/components/TextField'
import { useAuth } from '@/app/context/AuthContext'
import { MainStackProps } from '@/app/navigation/MainStack'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Login = () => {
    const navigation = useNavigation<NavigationProp<MainStackProps>>();
    const { login } = useAuth();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = () => {
        navigation.navigate('Register')
    }

    const hanldeAuth = () => {
        loginUser(email, password).then((res) => {
            if (res.jwt) {
                login(res.jwt);
                navigation.navigate('Content');
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View>
                    <Text style={styles.text}>Войдите</Text>
                    <Text style={[styles.text_1]}>и считайте деньги</Text>
                </View>
                
                <TextField value={email} onChangeText={setEmail} placeholder='Введите почту' style={{backgroundColor: '#f1f1f1', borderColor: '#082', borderWidth: 1}} />
                <TextField value={password} onChangeText={setPassword} placeholder='Введите пароль' secureTextEntry style={{backgroundColor: '#f1f1f1', borderColor: '#082', borderWidth: 1}} />

                <Button title='Войти' onPress={hanldeAuth} textStyle={{color: '#f1f1f1'}} buttonStyle={{backgroundColor: '#082'}} />

                <Text style={[styles.text_1, {textAlign: 'center', fontSize: 16, color: '#444'}]}>А если ещё нет аккаунта, можно легко зарегистрировать</Text>
                
                <Button title='Зарегистрироваться' onPress={handleRegister} buttonStyle={{backgroundColor: '#a3a'}} textStyle={{color: '#fff'}} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        gap: 19,
        padding: 30
    },
    
    text: {
        fontFamily: 'Balsamiq-Bold',
        fontSize: 32,
        color: '#082',
        fontWeight: 900
    },
    text_1: {
        fontFamily: 'Balsamiq',
        fontSize: 20,
        color: '#a3a',
    },
})

export default Login
