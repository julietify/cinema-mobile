import React, { FC } from 'react'
import { View, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

import type { TrailerRouteProp } from '../../navigation/stacks/film.stack'
import { ytvideo } from '../../utils/constants'
interface ITrailerProps {
  route: TrailerRouteProp
}

export const Trailer: FC<ITrailerProps> = ({
  route
}) => {

  const { trailerId } = route.params

  const path = 'https://'

  return (
    <>
    <StatusBar hidden />
    <View style={{ flex: 1 }}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `${ytvideo}/${trailerId}` }}
      />
    </View>
    </>
  )
}

