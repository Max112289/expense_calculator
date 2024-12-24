import { Feather } from '@expo/vector-icons'
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ProfileStackParamList } from '../Stacks/ProfileStack'
import { useUser } from '@/app/hoocks/useUser'

const ProfileHeader = ({route}: {route: RouteProp<ProfileStackParamList>}) => {
    const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
    const currentRoute = route.name;
    const { user } = useUser();


    const handleProfileNavigate = () => {
        navigation.navigate('Profile')
    }

    const handleNotificationsNavigate = () => {
        navigation.navigate('Notifications')
    }

    const handleSettingsNavigate = () => {
        navigation.navigate('Settings')
    }


    return (
        <View style={styles.container}>
            {currentRoute !== 'Main' && (
                <View style={[styles.profileBtn, {flexDirection: 'row', gap: 10}]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <View style={[styles.avatar, {backgroundColor: '#0000'}]}>
                            <Feather name='arrow-left' style={{fontSize: 30, color: '#082'}} />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.profileText}>
                        {
                            currentRoute === 'Notifications' && 'Уведомления' ||
                            currentRoute === 'Settings' && 'Настройки' ||
                            currentRoute === 'Profile' && 'Профиль'
                        }
                    </Text>
                </View>
            )}

            {currentRoute === 'Main' && (
                <TouchableOpacity style={styles.profileBtn} onPress={handleProfileNavigate}>
                    <View style={styles.avatar}>
                        <Feather name='image' style={{fontSize: 20, color: '#fff'}} />
                    </View>
                    <Text style={styles.profileText}>{user?.firstName}</Text>
                </TouchableOpacity>
            )}

            {currentRoute === 'Main' && (
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionBtn} onPress={handleNotificationsNavigate}>
                        <Feather name='bell' style={{fontSize: 30, color: '#a3a'}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.actionBtn} onPress={handleSettingsNavigate}>
                        <Feather name='settings' style={{fontSize: 30, color: '#082'}} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        paddingHorizontal: 20
    },
    profileText: {
        fontFamily: 'Bellota-Bold',
        fontSize: 22,
        color: '#082'
    },
    avatar: {
        width: 40,
        height: 40,
        backgroundColor: '#082',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    actionsContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        paddingRight: 10
    },
    actionBtn: {
        padding: 10,
        height: 60,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProfileHeader
