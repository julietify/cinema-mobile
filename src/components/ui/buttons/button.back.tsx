import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const ButtonBack = memo(() => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      onPress={() => navigation.goBack()} 
      style={{  
        margin: 20,
        width: 30
      }}
    >
      <Icon name='chevron-left' size={30} color='#161616' />
    </TouchableOpacity>
  )
})