import React, { FC } from "react"
import { View, Text } from "react-native"
import { ButtonBack } from "../../components/ui/buttons/button.back"

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
      <ButtonBack />
      <Text>id {params.filmId}</Text>
    </View>
  )
}