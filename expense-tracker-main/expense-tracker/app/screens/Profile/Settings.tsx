import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Settings = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Тут будут настройки
        </Text>
        <Feather name="settings" size={40} color="#a3a" />
        <Text style={[styles.text, { fontSize: 16 }]}>
            Но пока настраивать нечего...
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    text: {
        fontSize: 20,
        fontFamily: 'Balsamiq',
        color: '#a3a'
    }
})

export default Settings
