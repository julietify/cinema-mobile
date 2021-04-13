import React, { memo, ReactNode } from 'react'
import { ImageBackground } from 'react-native'

interface IWrapper {
  uri: string
  children: ReactNode
}

export const Wrapper = memo<IWrapper>(({
  uri,
  children
}) => 
  <ImageBackground 
    source={{ uri }} 
    style={{ flex: 1 }}
    blurRadius={90} 
  >
    {children}
  </ImageBackground>
)