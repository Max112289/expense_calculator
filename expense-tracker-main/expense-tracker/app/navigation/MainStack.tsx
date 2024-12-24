import { createStackNavigator, StackNavigatorProps } from '@react-navigation/stack'
import React from 'react'
import PrivateRoutes from './PrivateRoutes';
import Login from '../screens/AuthScreens/Login';
import Register from '../screens/AuthScreens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type MainStackProps = {
    Content: undefined;
    Login: undefined;
    Register: undefined;
}

const Stack = createNativeStackNavigator<MainStackProps>();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='Content' screenOptions={{headerShown: false, animation: 'fade'}}>
            <Stack.Screen name="Content" component={PrivateRoutes} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default MainStack
