import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  formScreen: {
    height: '100%',
    padding: 20,
    backgroundColor: theme.color.main,
  },
  roundedBtn: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    zIndex: 999,
    width: 70,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.secondary,
    borderRadius: 35,
    elevation: 10,
  },
  placeholder: {
    fontStyle: 'italic',
  },
  titleInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 32,
    fontStyle: 'normal',
  },
  bodyContainer: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  bodyInput: {
    lineHeight: 30,
    color: 'white',
    fontSize: 20,
    fontStyle: 'normal',
  },
})
