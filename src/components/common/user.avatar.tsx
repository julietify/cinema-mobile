import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'

interface IUserAvatar {
  picture: string
  onPress?: () => void
  size?: number
}

export const UserAvatar = memo<IUserAvatar>(({
  picture,
  onPress,
  size
}) => {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.8}>
      <Image 
        source={{ uri: picture }} 
        style={{
          width: size || 30,
          height: size || 30,
          borderRadius: 50
        }} 
      />
    </TouchableOpacity>
  )
})