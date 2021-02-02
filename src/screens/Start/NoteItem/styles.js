import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export default StyleSheet.create({
  itemWrapper: {
    height: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderTopColor: theme.color.primary,
    borderBottomColor: theme.color.primary,
    backgroundColor: theme.color.secondary,
    justifyContent: 'center',
    elevation: 10,
  },
  itemTitle: {
    marginBottom: 8,
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  itemDate: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
  },
  action: {
    width: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  actionText: {
    marginLeft: 8,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
})
