import React, { FC } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

import { FilmContainer } from '../../components/film/film.container'

import type { FilmRouteProp } from '../../navigation/stacks/film.stack'

interface IFilmProps {
  route: FilmRouteProp
}

export const Film: FC<IFilmProps> = ({
  route
}) => {

  const { params } = route
  return (
    <View style={styles.container}>
      <FilmContainer 
        id={params.filmId} 
        picture={params.filmPicture} 
        name={params.filmName} 
        time={params.filmTime} 
        genre={params.filmGenre}
        story={params.filmStory} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})