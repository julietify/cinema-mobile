import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { palette } from '../../../theme/palette'

export const ButtonBack = memo(() => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name='close-circle' size={30} color={palette.main.silver} />
    </TouchableOpacity>
  )
})