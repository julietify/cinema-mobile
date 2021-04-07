import { useCallback } from "react"
import { useNavigation } from "@react-navigation/core"

export const useRedirect = () => {
  const navigation = useNavigation()

  const redirectoToFilmScreen = useCallback(filmId => {
    navigation.navigate('RootFilm', {
      screen: 'FilmRoot',
      params: { filmId }
    })
  }, [])

  return {
    redirectoToFilmScreen
  }
}