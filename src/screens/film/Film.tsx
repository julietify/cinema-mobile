import React, { FC } from "react"
import { View, Text } from "react-native"

import type { FilmRouteProp } from '../../navigation/stacks/film.stack'

interface IFilmProps {
  route: FilmRouteProp
}

export const Film: FC<IFilmProps> = ({
  route
}) => {

  const { params } = route

  return (
    <View>
      <Text>Film screen</Text>
      <Text>Id {params.filmId}</Text>
    </View>
  )
}