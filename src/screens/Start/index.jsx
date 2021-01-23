import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'

const Start = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.startScreen}>
      <TouchableOpacity style={styles.roundedBtn} onPress={() => navigate('Form')}>
        <Feather name="plus-circle" size={32} color="white" />
        <Text style={styles.roundedBtnText}>Nova</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Start
