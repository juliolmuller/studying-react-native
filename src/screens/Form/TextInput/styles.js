import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export default StyleSheet.create({
  placeholder: {
    fontStyle: 'italic',
  },
  noPlaceholder: {
    fontStyle: 'normal',
  },
  textInput: {
    padding: 10,
    paddingBottom: 5,
    borderRadius: 10,
    lineHeight: 30,
    color: 'white',
  },
  blurredInput: {
    backgroundColor: theme.color.main,
  },
  focusedInput: {
    backgroundColor: theme.color.primary,
  },
})
