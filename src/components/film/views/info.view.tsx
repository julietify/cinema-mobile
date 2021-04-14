import React, { memo } from 'react'
import { View } from 'react-native'

import { Body1 } from '../../ui/typography/title'

export const Info = memo<{ time: string, genre: string }>(({
  time,
  genre
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Body1>{time}</Body1>
      <Body1>{genre}</Body1>
    </View>
  )
})