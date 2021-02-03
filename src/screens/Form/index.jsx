import React, { useContext, useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { NotesContext } from '../../contexts'
import TextInput from './TextInput'
import styles from './styles'

const Form = () => {
  const bodyTextInput = useRef()
  const noteId = useRoute().params
  const { goBack } = useNavigation()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { notes, createNote, updateNote } = useContext(NotesContext)

  const handleSaveNote = () => {
    const note = { id: noteId, title, body }

    if (noteId) {
      updateNote(note)
    } else {
      createNote(note)
    }
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
      <If condition={title || body}>
        <RectButton style={styles.okButton} onPress={handleSaveNote}>
          <Feather name="check" size={40} color="white" />
        </RectButton>
      </If>

      <BorderlessButton style={styles.cancelButton} onPress={goBack}>
        <Feather name="x" size={30} color="white" />
      </BorderlessButton>

      <TextInput
        size={32}
        placeholder="Título"
        onSubmitEditing={() => bodyTextInput.current.focus()}
        onChangeText={setTitle}
        value={title}
        autoFocus={!noteId}
        blurOnSubmit={false}
      />
      <View style={styles.separator} />
      <ScrollView style={styles.bodyContainer}>
        <TextInput
          size={20}
          ref={bodyTextInput}
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
