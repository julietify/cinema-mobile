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
  const redirectoToTicketScreen = useCallback(ticketOrder => {
    navigation.navigate('RootTicket', {
      screen: 'RootTicket',
      params: { ticketOrder }
    })
  }, [])

  return {
    redirectoToFilmScreen,redirectoToTicketScreen
  }
}