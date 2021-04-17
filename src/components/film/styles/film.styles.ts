import { StyleSheet } from 'react-native'

export const filmStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  trailerContainer: {
    alignItems: 'center'
  },
  filmRating: {
    alignItems:'center'
  },
  bookContainer: {
    bottom: 0,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})
