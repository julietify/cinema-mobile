import React, { memo } from 'react'
import { View, StyleSheet, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useTheme } from '@react-navigation/native'

import { Body1, Body2, Title } from '../ui/typography/title'

interface ICard {
  lines: Array<string>
  poster: string
  id: string
  iWidth?: number
  iPadding?: number
  iFullness?: string
  iFont?: number
  prop?: boolean
  onPress?: (filmId: string) => void
}

export const Card = memo<ICard>(({
  id,
  poster,
  lines,
  iWidth,
  iPadding,
  iFullness,
  iFont,
  prop,
  onPress
}) => {

  const { width } = useWindowDimensions()
  const { colors } = useTheme()

  return (
    <TouchableOpacity activeOpacity={.6} onPress={() => onPress(id)}>
      <View
        style={{
          ...styles.container,
          width: width - 50
        }}
      >
        <Image
          source={{ uri: poster }}
          style={{
            ...styles.image,
             width: iWidth || 65,
              height: iWidth * 1.4 || 90 
            }}
        />
        <View style={{
           ...styles.infoContainer,
            paddingVertical: iPadding || 0,
             width: iFullness || '50%' 
            }}
        >
          <Title color='black' fontSize={ iFont || 13 }>
            {lines[0]}
          </Title>
          <Body1 color='silver' margin='0'>
            {lines[1]}
          </Body1>
          <Body2 color={colors.text}>
            {lines[2]}
          </Body2>
        </View>
        {prop ? undefined : <View style={styles.priceContainer}><Icon name='chevron-right' size={25} /></View>}
      </View>

    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    width: '50%'
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%'
  },
  image: {
    resizeMode: 'stretch',
    borderRadius: 30
  }
})