import React, { FC } from 'react'
import { Pressable, Text, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IButton } from '../../../interfaces/IButton'
import { palette } from '../../../theme/palette'

interface IButtonIcon extends IButton {
  iconName: string
  iconColor?: string
  brRadius?: number
  w?: number
  p?: number
}

export const ButtonIcon: FC<IButtonIcon> = ({
  iconName,
  iconColor,
  text,
  bgColor,
  brRadius,
  p,
  w,
  onPress
}) => {
  const window = useWindowDimensions()

  const defaultWidth = window.width - 50

  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={.8}
      style={{
        ...styles.container, 
          width: w || defaultWidth, 
          backgroundColor: bgColor || palette.main.lightblue,
          borderRadius: brRadius || 10,
          padding: p || 17
      }}
    >
      <Icon name={iconName} size={25} color={iconColor || '#fff'} />
      { text && <Text style={styles.text}>{text}</Text> }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
    elevation: 5,
    padding: 20
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  }
})