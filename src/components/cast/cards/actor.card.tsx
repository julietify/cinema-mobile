import React, { memo } from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'

import { Body1, Body2 } from '../../ui/typography/title'

interface IActorCard {
  actorRole: string
  actorName: string
  picture: string
}

export const ActorCard = memo<IActorCard>(({
  actorRole,
  actorName,
  picture
}) => {
  
  const image = { uri: picture }

  return(
    <View style={styles.container}>
      <ImageBackground 
        source={image} 
        style={styles.bgImage} 
        imageStyle={styles.image} 
      />
      <Body1>{actorRole}</Body1>
      <Body2>{actorName}</Body2>
    </View>
  )
})

const styles = StyleSheet.create({
  bgImage: {
    width: 95,
    height: 120,
    marginHorizontal: 10
  },
  image: {
    borderRadius: 5
  },
  container: {
    alignItems: 'center'
  }
})