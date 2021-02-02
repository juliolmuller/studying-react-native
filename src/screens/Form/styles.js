import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  formScreen: {
    height: '100%',
    padding: 20,
    backgroundColor: theme.color.main,
  },
  okButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    zIndex: 999,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.secondary,
    borderRadius: 35,
    elevation: 10,
  },
  cancelButton: {
    width: 40,
    height: 40,
    marginTop: 30,
    marginLeft: 'auto',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  separator: {
    height: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
  bodyContainer: {
    paddingVertical: 20,
  },
})
