import React, { memo, ReactNode } from 'react'
import { View } from 'react-native'

import { Title } from '../../ui/typography/title'

interface IViewWrapper {
  title: string
  children: ReactNode
}

export const ViewWrapper = memo<IViewWrapper>(({
  children,
  title
}) => {

  return (
    <View 
      style={{ 
        marginHorizontal: 15, 
        marginVertical: 20 
      }}
    >
      <Title fontSize='16px'>{title}</Title>
      <View 
        style={{ 
          marginVertical: 15 
        }}
      >
        {children}
      </View>
    </View>
  )
})