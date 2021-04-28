import React, { FC } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useTheme } from "@react-navigation/native"

import { Title } from '../ui/typography/title'

interface IButtonProfile {
  iconName: string
  text: string
  onPress?
}
export const ButtonProfile: FC<IButtonProfile> = ({
  iconName,
  text,
  onPress
}) => {

  const { colors } = useTheme()

  return (
    <TouchableOpacity onPress={() => {onPress}}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Icon style={styles.icon} name={iconName} size={25} />
          <Title color={colors.text} fontSize={14} style={styles.text}>{text}</Title>
        </View>
        <Icon name={`chevron-right`} size={25} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection:'row',
    alignItems:'center'
  },
  icon: {
    marginHorizontal: 10
  },
  text: {
    marginLeft: 20
  }
})