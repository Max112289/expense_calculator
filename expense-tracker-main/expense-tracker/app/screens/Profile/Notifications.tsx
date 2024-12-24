import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notifications = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Нет новых уведомлений
        </Text>
        <Feather name="check" size={40} color="#a3a" />
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

export default Notifications
