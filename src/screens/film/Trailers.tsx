import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { ButtonIcon } from "../../components/ui/buttons/button.icon"

import type { TrailersRouteProp } from '../../navigation/stacks/film.stack'
import { useRedirect } from "../../hooks/useRedirect"

interface ITrailersProps {
  route:TrailersRouteProp
}

export const Trailers:FC<ITrailersProps> = ({
 route
}) => {
  const { filmId } = route.params
  const trailerId = 'hello'

  const { redirectoToTrailerScreen } = useRedirect()
  
  return (
    <View 
      style={{flex:1,alignItems:'center',justifyContent:'center'}}
    >
      <Text>{filmId}</Text>
      <ButtonIcon 
        iconName='play'
        text='Watch trailer'
        onPress={() => redirectoToTrailerScreen(trailerId)}
      />
    </View>
  )
}