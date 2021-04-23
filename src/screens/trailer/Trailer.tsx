import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { WebView } from 'react-native-webview';

import type { TrailerRouteProp } from '../../navigation/stacks/film.stack'

interface ITrailerProps {
  route: TrailerRouteProp
}

export const Trailer: FC<ITrailerProps> = ({
  route
}) => {

  const { trailerId } = route.params

  return (
    <View style={{flex:1}}>
      <Text>{trailerId}</Text>
    </View>
  )
}

/*
        <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/2EcwnGFi4AQ' }}
        />
*/