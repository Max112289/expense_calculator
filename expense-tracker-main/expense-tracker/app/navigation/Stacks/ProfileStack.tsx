import MainProfile from '@/app/screens/Profile/MainProfile';
import Notifications from '@/app/screens/Profile/Notifications';
import Profile from '@/app/screens/Profile/Profile';
import Settings from '@/app/screens/Profile/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ProfileHeader from '../Headers/ProfileHeader';

export type ProfileStackParamList = {
    Main: undefined;
    Profile: undefined;
    Notifications: undefined;
    Settings: undefined;
}

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={({route}) => ({
        header: () => (<ProfileHeader route={route} />)
    })}>
        <Stack.Screen name="Main" component={MainProfile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default ProfileStack
