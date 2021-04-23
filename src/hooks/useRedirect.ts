import { useCallback } from "react"
import { useNavigation } from "@react-navigation/core"

export const useRedirect = () => {
  const navigation = useNavigation()

  const redirectToFilmScreen = useCallback(filmId => {
    navigation.navigate('RootFilm', {
      screen: 'RootFilm',
      params: { filmId }
    })
  }, [])

  const redirectToTrailersScreen = useCallback(filmId => {
    navigation.navigate('Trailers', { filmId })
  }, [])

  const redirectToTrailerScreen = useCallback(trailerId => {
    navigation.navigate('Trailer', { trailerId })
  }, [])

  const redirectToTicketScreen = useCallback(ticketId => {
    navigation.navigate('Ticket', { ticketId })
  }, [])

  const redirectToBookingScreen = useCallback(filmId => {
    navigation.navigate('Booking', { filmId })
  }, [])


  return {
    redirectToFilmScreen,
    redirectToTicketScreen,
    redirectToTrailersScreen,
    redirectToBookingScreen,
    redirectToTrailerScreen
  }
}