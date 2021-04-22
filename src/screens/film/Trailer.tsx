import React, { FC }from 'react'
import { View, Text } from 'react-native'

import type { TrailerRouteProp } from '../../navigation/stacks/film.stack'

interface ITrailerProps {
  route: TrailerRouteProp
}

export const Trailer:FC<ITrailerProps> = ({
  route
}) => {

  const { filmId } = route.params

  return(
    <View><Text>{filmId}</Text></View>
  )
}