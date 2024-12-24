import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ProfileHeader from '../Headers/ProfileHeader';
import Infography from '@/app/screens/Infography/Infography';
import InfographyHeader from '../Headers/InfographyHeader';
import History from '@/app/screens/Infography/History';

export type InfographyStackParamList = {
    Main: undefined;
    History: {id: number, documentId: string, name: string };
}

const Stack = createNativeStackNavigator<InfographyStackParamList>();

const InfographyStack = () => {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={({route}) => ({
        header: () => (<InfographyHeader route={route} />)
    })}>
        <Stack.Screen name="Main" component={Infography} />
        <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  )
}

export default InfographyStack
