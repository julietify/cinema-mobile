import React, { FC } from 'react'
import { View, ImageBackground, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { Title } from '../../ui/typography/title'
import { palette } from '../../../theme/palette'
import { ytimg } from '../../../utils/constants'

interface ITrailerCard {
  name: string
  trailerId: string
  onPress?: (id: string) => void
}

export const TrailerCard: FC<ITrailerCard> = ({
  trailerId,
  name,
  onPress
}) => {

  const { colors } = useTheme()
  const { width } = useWindowDimensions()

  const iWidth = width * .8
  const iHeight = iWidth / 1.8

  return (
    <View style={styles.wrapper}>
      <View style={{ ...styles.container, width: iWidth }}>
        <TouchableOpacity activeOpacity={.9} onPress={() => onPress(trailerId)}>
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={{ ...styles.image, height: iHeight }}
            source={{ uri: `${ytimg}/${trailerId}/maxresdefault.jpg` }}
          >
          </ImageBackground>
        </TouchableOpacity>
        <Title fontSize='13px' style={styles.text} color={colors.text}>{name}</Title>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  container: {
    marginBottom: 15
  },
  image: {
    elevation: 15,
    backgroundColor: palette.theme.light,
    borderRadius: 10
  },
  text: {
    marginVertical: 20
  }
})