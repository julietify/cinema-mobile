import { useCallback } from "react"
import { useNavigation } from "@react-navigation/core"

export const useRedirect = () => {
  const navigation = useNavigation()

  const redirectoToFilmScreen = useCallback((filmId,filmPicture,filmName,filmGenre,filmTime,filmStory) => {
    navigation.navigate('RootFilm', {
      screen: 'RootFilm',
      params: { filmId, filmPicture, filmName,filmGenre,filmTime, filmStory }
    })
  }, [])

  return {
    redirectoToFilmScreen
  }
}