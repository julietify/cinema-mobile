import React, { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IRadioButton {
  color?: string
  status: 'checked' | 'unchecked'
  onPress?
}

export const RadioButton: FC<IRadioButton> = ({
  color,
  status,
  onPress
}) => {

  let object = <View style={styles.empty}></View>

  if (status === 'checked') {
    object = 
    <View 
      style={{ ...styles.container, backgroundColor: color }}
      >
        <Icon 
          name={'check'} 
          size={16} 
          color={'white'} 
        />
    </View>
  }

  return (
    <TouchableOpacity onPress={onPress}>
      {object}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  empty:{
    width:20,
    height:20,
    borderRadius:10,
    borderColor:"silver",
    borderWidth:1
  }
})