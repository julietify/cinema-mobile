import React, { memo } from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image, useWindowDimensions } from 'react-native'

import { ButtonBack } from "../../components/ui/buttons/button.back"
import { ButtonTrailer } from "../../components/ui/buttons/button.trailer"
import { FIlmHistory } from './film.history'
import { Button } from '../ui/buttons/button'

interface IFilmContainer {
  id: string,
  picture: string
  name: string
  genre: string
  time: string
  story: string
}
export const FilmContainer = memo<IFilmContainer>(({
  id,
  picture,
  name,
  time,
  genre,
  story
}) => {
  const { width } = useWindowDimensions()

  const iWidth = width * .4
  const iHeight = iWidth * 1.5

  return (
    <ImageBackground
      source={{ uri: picture }}
      resizeMode='stretch'
      blurRadius={90}
      style={styles.bgImage}
    >
      <ScrollView>
        <ButtonBack />
        <View style={styles.container}>
          <Image
            source={{ uri: picture }}
            style={{ width: iWidth, height: iHeight, borderRadius: 10, marginTop: 40 }} />
          <Text style={styles.text}>{name}</Text>
          <ButtonTrailer />
          <Text style={styles.genreText}>{time} {genre}</Text>
          <FIlmHistory story={story}/>
        </View>
      </ScrollView>
      <Button />
    </ImageBackground>
  )

})

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '700',
    width: '60%',
    marginVertical: 40
  },
  genreText: {
    color: 'rgba(200,200,200,0.8)',
    fontSize: 13,
    marginTop: 20,
  }
})