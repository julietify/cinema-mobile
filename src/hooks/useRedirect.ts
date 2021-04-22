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
  const redirectoToTrailersScreen = useCallback(filmId => {
    navigation.navigate('Trailers', { filmId })
  }, [])
  const redirectoToTrailerScreen = useCallback(trailerId => {
    navigation.navigate('Trailer', { trailerId })
  }, [])
  const redirectoToTicketScreen = useCallback(ticketId => {
    navigation.navigate('Ticket', { ticketId })
  }, [])

  return {
    redirectoToFilmScreen,
    redirectoToTicketScreen,
    redirectoToTrailersScreen,
    redirectoToTrailerScreen
  }
}