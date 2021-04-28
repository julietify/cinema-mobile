import React, { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Title1 } from '../ui/typography/title'

interface IButtonProfile {
  iconName: string
  text: string
  onPress?: () => void
}
export const ButtonProfile: FC<IButtonProfile> = ({
  iconName,
  text,
  onPress
}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Icon style={styles.icon} name={iconName} size={22} />
          <Title1 style={styles.text}>{text}</Title1>
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
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 10
  },
  text: {
    marginLeft: 20
  }
})