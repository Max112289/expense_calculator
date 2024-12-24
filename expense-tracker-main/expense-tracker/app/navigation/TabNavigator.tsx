import { Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native';
import ProfileStack from './Stacks/ProfileStack';
import Infography from '../screens/Infography/Infography';
import InfographyHeader from './Headers/InfographyHeader';
import InfographyStack from './Stacks/InfographyStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Profile" screenOptions={{
            tabBarStyle: {
                backgroundColor: '#fff', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: 65,
            },
            }}>
            <Tab.Screen name="Profile" component={ProfileStack}
                options={{
                    tabBarIcon: ({focused}) => (<FontAwesome6 name='user' size={24} color={focused ? '#082' : '#000'} />),
                    tabBarLabel: ({focused}) => (<Text style={{fontFamily: 'Bellota-Bold', color: focused ? '#082' : '#000'}}>Профиль</Text>),
                    header: () => (<></>)
                }}
            />
            <Tab.Screen name="Infography" component={InfographyStack}
                options={{
                    tabBarIcon: ({focused}) => (<Feather name='credit-card' size={24} color={focused ? '#082' : '#000'} />),
                    tabBarLabel: ({focused}) => (<Text style={{fontFamily: 'Bellota-Bold', color: focused ? '#082' : '#000'}}>Счета</Text>),
                    header: () => <></>
                }}
            />
            {/* <Tab.Screen name="Friends" component={View}
                options={{
                    tabBarIcon: ({focused}) => (<Feather name='users' size={24} color={focused ? '#082' : '#000'} />),
                    tabBarLabel: ({focused}) => (<Text style={{fontFamily: 'Bellota-Bold', color: focused ? '#082' : '#000'}}>Друзья</Text>)
                }}
            />
            <Tab.Screen name="Invoice" component={View}
                options={{
                    tabBarIcon: ({focused}) => (<MaterialIcons name='payment' size={24} color={focused ? '#082' : '#000'} />),
                    tabBarLabel: ({focused}) => (<Text style={{fontFamily: 'Bellota-Bold', color: focused ? '#082' : '#000'}}>Счета</Text>)
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator
