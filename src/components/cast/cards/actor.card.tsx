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
  const image = { uri: picture };
  return(
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} imageStyle={{borderRadius:10}} />
      <Body1>{actorRole}</Body1>
      <Body2>{actorName}</Body2>
    </View>
  )
})

const styles = StyleSheet.create({
  image: {
    width:70,
    height:90,
    marginHorizontal:20
  },
  container: {
    alignItems:'center'
  }
})