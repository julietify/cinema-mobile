import { useCallback } from "react"
import { useNavigation } from "@react-navigation/core"

export const useRedirect = () => {
  const navigation = useNavigation()

  const redirectoToFilmScreen = useCallback(filmId => {
    navigation.navigate('RootFilm', {
      screen: 'RootFilm',
      params: { filmId }
    })
  }, [])
  const redirectoToTrailerScreen = useCallback(filmId => {
    navigation.navigate('Trailer', { filmId })
  }, [])
  const redirectoToTicketScreen = useCallback(ticketId => {
    navigation.navigate('Ticket', { ticketId })
  }, [])

  return {
    redirectoToFilmScreen,
    redirectoToTicketScreen,
    redirectoToTrailerScreen
  }
}