import FieldSection from '@/app/components/FieldSection'
import { useUser } from '@/app/hoocks/useUser'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const MainProfile = () => {
  const { user } = useUser();

  return (
    <ScrollView style={styles.container}>
      <FieldSection>
        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
          <View style={{flex: 1}}>

            <Image
              style={{
                width: '100%',
                aspectRatio: 1,
                borderRadius: 10000,
                resizeMode: 'cover'
              }}
              source={{
                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }} />

            </View>

            <View style={{flex: 4}}>
              <Text style={{fontFamily: 'Balsamiq', fontSize: 26}}>{user?.firstName} {user?.lastName}</Text>
            </View>
          </View>
      </FieldSection>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 30
  },
  textContainer: {
      fontFamily: 'Balsamiq',
      fontSize: 16,
      fontWeight: 100,
      color: '#a3a',
      // marginBottom: 10
  },
  containerData: {
      gap: 10,
      padding: 20,
  },
  separator: {
      borderBottomWidth: 3,
      borderColor: '#a3a3'
  },
  textField: {
      backgroundColor: '#f1f1f1',
      borderColor: '#a3a3',
      borderWidth: 1,
      fontFamily: 'Balsamiq'
  }
})

export default MainProfile
