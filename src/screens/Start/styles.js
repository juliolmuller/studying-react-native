import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  startScreen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.bgColor.whitish,
  },
  roundedBtn: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.bgColor.primary,
    borderRadius: 25,
  },
  roundedBtnText: {
    marginLeft: 8,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 24,
  },
})
