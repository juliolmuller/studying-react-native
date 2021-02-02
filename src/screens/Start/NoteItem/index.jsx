import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'
import { RectButton, Swipeable } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import styles from './styles'

const rippleEffect = TouchableNativeFeedback.Ripple(null, false)

const NoteItem = ({ note, onDelete, onPress }) => {
  const SwipeAction = () => (
    <RectButton style={styles.action} onPress={onDelete}>
      <Feather name="trash-2" size={26} color="white" />
      <Text style={styles.actionText}>Excluir</Text>
    </RectButton>
  )

  return (
    <Swipeable
      friction={2}
      overshootLeft={false}
      overshootRight={false}
      renderLeftActions={SwipeAction}
      renderRightActions={SwipeAction}
    >
      <TouchableNativeFeedback onPress={onPress} background={rippleEffect}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>{note.title}</Text>
          <Text style={styles.itemDate}>
            Criado em {note.createdAt.getDate()}/{note.createdAt.getMonth()}/{note.createdAt.getFullYear()}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  )
}

export default NoteItem
