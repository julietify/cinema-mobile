import { useTheme } from '@react-navigation/native'
import React, { memo } from 'react'
import { View, StyleSheet, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Body1, Body2, Title1 } from '../ui/typography/title'

interface ICard {
  lines: Array<string>
  poster: string
  id: string
  onPress?: (filmId: string) => void
}

export const Card = memo<ICard>(({
  id,
  poster,
  lines,
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
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Title1>
            {lines[0]}
          </Title1>
          <Body1 color='silver' margin='0'>
            {lines[1]}
          </Body1>
          <Body2 color={colors.text}>
            {lines[2]}
          </Body2>
        </View>
        <View style={styles.priceContainer}>
          <Icon name='chevron-right' size={25} />
        </View>
      </View>
      
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    width: 65,
    height: 90,
    resizeMode: 'stretch',
    borderRadius: 30
  }
})