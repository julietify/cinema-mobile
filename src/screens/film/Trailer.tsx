import React, { FC } from 'react'
import { View, Text } from 'react-native'


import { WebView } from 'react-native-webview';

interface ITrailerProps {
}

export const Trailer: FC<ITrailerProps> = ({
}) => {


  return (
    <View style={{flex:1}}>
        <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/2EcwnGFi4AQ' }}
        />
    </View>
  )
}