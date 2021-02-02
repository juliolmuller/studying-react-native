import React, { useContext, useEffect, useState } from 'react'
import { TextInput, SafeAreaView, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { NotesContext } from '../../contexts'
import styles from './styles'

const Form = () => {
  const noteId = useRoute().params
  const { goBack } = useNavigation()
  const { notes } = useContext(NotesContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSaveNote = () => {
    goBack()
  }

  useEffect(() => {
    if (noteId) {
      const { body, title } = notes.find(({ id }) => noteId === id) // eslint-disable-line no-shadow

      setTitle(title)
      setBody(body)
    }
  }, [noteId])

  return (
    <SafeAreaView style={styles.formScreen}>
      <RectButton style={styles.roundedBtn} onPress={handleSaveNote}>
        <Feather name="check" size={40} color="white" />
      </RectButton>

      <TextInput
        style={[styles.titleInput, title ? {} : styles.placeholder]}
        placeholder="Título"
        onChangeText={setTitle}
        value={title}
        multiline
      />
      <ScrollView style={styles.bodyContainer}>
        <TextInput
          style={[styles.bodyInput, body ? {} : styles.placeholder]}
          placeholder="Escreva sua nota"
          onChangeText={setBody}
          value={body}
          multiline
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form
