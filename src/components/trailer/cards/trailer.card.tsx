import React, { FC } from 'react'
import { View, ImageBackground, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'

import { useTheme } from '@react-navigation/native'

import { Title } from '../../ui/typography/title'
interface ITrailerCard {
  picture: string
  name: string
}

export const TrailerCard: FC<ITrailerCard> = ({
  picture,
  name
}) => {
  const { colors } = useTheme()

  const { width } = useWindowDimensions()

  const iWidth = width * .8
  const iHeight = iWidth / 1.8

  return (
    <View style={styles.wrapper}>
      <View style={[{ ...styles.container }, { width: iWidth }]}>
        <TouchableOpacity>
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={[{ ...styles.image }, { height: iHeight }]}
            source={{ uri: `https://img.youtube.com/vi/${picture}/maxresdefault.jpg` }}
          >
          </ImageBackground>
        </TouchableOpacity>
        <Title style={styles.text} color={colors.text}>{name}</Title>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  container: {
    marginBottom:15
  },
  image: {
    elevation: 30,
    borderRadius: 1
  },
  text: {
    fontSize: 18,
    marginVertical: 15
  }
})