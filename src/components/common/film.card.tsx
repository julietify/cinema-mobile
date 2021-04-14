import React, { memo } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'

interface IFilmCard {
  picture: string
  id?: string
  name?: string
  onPress?: (id: string) => void
}

export const FilmCard = memo<IFilmCard>(({
  picture,
  name,
  id,
  onPress
}) => {

  const { width } = useWindowDimensions()

  const iWidth = width * .7
  const iHeight = iWidth * 1.5

  return (
    <View style={{ ...styles.container, width }}>
      <View style={{ elevation: 25, borderRadius: 15 }}>
        <TouchableOpacity activeOpacity={.9} onPress={() => onPress(id)}>
          <Image 
            resizeMode='cover'
            source={{ uri: picture }}
            style={{
              width: iWidth,
              height: iHeight,
              borderRadius: 15
            }} 
          />
        </TouchableOpacity>
      </View>
    </View>
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