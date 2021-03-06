import React, { memo, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { palette } from '../../../theme/palette'

export const ButtonLike = memo(() => {

  const [like, setLike] = useState(false)

  return (
    <TouchableOpacity onPress={() => setLike(!like)}>
      <Icon 
        name={like ? 'cards-heart' : 'heart-outline'} 
        size={25} 
        color={like && palette.theme.light}
      />
    </TouchableOpacity>
  )
})
