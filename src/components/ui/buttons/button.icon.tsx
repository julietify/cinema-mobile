import React, { FC } from 'react'
import { Pressable, Text, View, StyleSheet, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IButton } from '../../../interfaces/IButton'

interface IButtonIcon extends IButton {
  iconName: string
  iconColor?: string
}

export const ButtonIcon: FC<IButtonIcon> = ({
  iconName,
  iconColor,
  text,
  bgColor,
  onPress
}) => {
  const window = useWindowDimensions()

  const width = window.width - 50

  return (
    <Pressable 
      onPress={onPress} 
    >
      <View 
        style={{ 
          ...styles.container, 
          width, 
          backgroundColor: bgColor
        }}
      >
        <Icon name={iconName} size={25} color={iconColor || '#fff'} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 17,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 15
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  }
})