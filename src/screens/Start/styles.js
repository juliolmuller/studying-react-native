import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  startScreen: {
    height: '100%',
    backgroundColor: theme.color.whitish,
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
    backgroundColor: theme.color.tertiary,
    borderRadius: 35,
    elevation: 10,
  },
  roundedBtnText: {
    marginLeft: 8,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
  },
})
