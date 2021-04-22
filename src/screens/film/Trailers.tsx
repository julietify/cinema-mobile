import React, { FC } from 'react'
import { View, Text } from 'react-native'

import type { TrailersRouteProp } from '../../navigation/stacks/film.stack'

interface ITrailersProps {
  route:TrailersRouteProp
}

export const Trailers:FC<ITrailersProps> = ({
 route
}) => {
  const { filmId } = route.params
  return (
    <View>
      <Text>{filmId}</Text>
    </View>
  )
}