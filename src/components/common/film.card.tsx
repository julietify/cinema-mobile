import React, { memo } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'

interface IFilmCard {
  picture: string
  name?: string
  genre?: string
  onPress?: () => void
}

export const FilmCard = memo<IFilmCard>(({
  picture,
  name,
  genre,
  onPress
}) => {

  const { width } = useWindowDimensions()

  const iWidth = width * .7
  const iHeight = iWidth * 1.5

  return (
    <TouchableOpacity activeOpacity={.9} onPress={onPress}>
      <View style={{ ...styles.container, width }}>
        <View style={{ elevation: 25 }}>
          <Image 
            resizeMode='cover'
            source={{ uri: picture }}
            style={{
              width: iWidth,
              height: iHeight,
              borderRadius: 15
            }} 
          />
        </View>
      </View>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  filmName: {
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 5,
  },
})