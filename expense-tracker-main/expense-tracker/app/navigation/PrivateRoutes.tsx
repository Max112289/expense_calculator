import React, { useState } from 'react'
import TabNavigator from './TabNavigator';
import Login from '../screens/AuthScreens/Login';
import { useAuth } from '../context/AuthContext';

const PrivateRoutes = () => {
    const { token } = useAuth();
    return (
        <>
            {token ? <TabNavigator /> : <Login />}
        </>
    )
}

export default PrivateRoutes
