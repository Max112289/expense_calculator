import React from 'react'
import { View } from 'react-native'
import { useFonts } from 'expo-font';
import MainStack from './navigation/MainStack';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

const index = () => {
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Bellota-Bold.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Bellota-Regular.ttf'),
        'Sofia': require('../assets/fonts/SofiaSans-VariableFont_wght.ttf'),
        'Balsamiq-Bold': require('../assets/fonts/BalsamiqSans-Bold.ttf'),
        'Balsamiq': require('../assets/fonts/BalsamiqSans-Regular.ttf'),
    });

    return (
        <AuthProvider>
            <UserProvider>
                <MainStack />
            </UserProvider>
        </AuthProvider>
    )
}

export default index
