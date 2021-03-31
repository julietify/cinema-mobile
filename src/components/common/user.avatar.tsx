import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'

interface IUserAvatar {
  picture: string
  onPress?: () => void
}

export const UserAvatar = memo<IUserAvatar>(({
  picture,
  onPress
}) => {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.8}>
      <Image 
        source={{ uri: picture }} 
        style={{
          width: 30,
          height: 30,
          borderRadius: 50
        }} 
      />
    </TouchableOpacity>
  )
})