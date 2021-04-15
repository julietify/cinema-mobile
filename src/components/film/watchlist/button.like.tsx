import React, { memo, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { palette } from '../../../theme/palette'

export const ButtonLike = memo(() => {

  const [like, setLike] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => setLike(!like) }
      style={{
        marginVertical: 50,
        marginHorizontal: 30,
        width: 30
      }}
    >
      <Icon name={like ? 'cards-heart' : 'heart-outline'} size={30} color={palette.main.silver}/>
    </TouchableOpacity>
  )
})