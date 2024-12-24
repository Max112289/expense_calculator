import { Feather, FontAwesome6 } from '@expo/vector-icons'
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ProfileStackParamList } from '../Stacks/ProfileStack'
import { useUser } from '@/app/hoocks/useUser'
import { InfographyStackParamList } from '../Stacks/InfographyStack'

const InfographyHeader = ({route}: {route: RouteProp<InfographyStackParamList>}) => {
    const navigation = useNavigation<NavigationProp<InfographyStackParamList>>();
    const { user } = useUser();

    return (
        <View style={styles.container}>
                <View style={[styles.profileBtn, {flexDirection: 'row', gap: 10}]}>
                    {
                        route.name !== 'Main' && (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <View style={[styles.avatar, {backgroundColor: '#0000'}]}>
                                    <Feather name='arrow-left' style={{fontSize: 30, color: '#082'}} />
                                </View>
                            </TouchableOpacity>
                    )}
                    <Feather name='credit-card' size={24} color='#082' />
                    <Text style={styles.profileText}>
                        Счета
                    </Text>
                </View>
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

export default InfographyHeader
