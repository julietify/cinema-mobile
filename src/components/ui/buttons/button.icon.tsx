import React, { FC } from 'react'
import { Pressable, Text, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IButton } from '../../../interfaces/IButton'

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
      activeOpacity={.9}
    >
      <View 
        style={{ 
          ...styles.container, 
          width: w || defaultWidth, 
          backgroundColor: bgColor,
          borderRadius: brRadius || 10,
          padding: p || 17
        }}
      >
        <Icon name={iconName} size={25} color={iconColor || '#fff'} />
        { text && <Text style={styles.text}>{text}</Text> }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // padding: 10,
    marginTop: 10,
    marginBottom: 10,
    // borderRadius: 10,
    elevation: 15
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  }
})