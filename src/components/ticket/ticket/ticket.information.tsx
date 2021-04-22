import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { typography } from '../styles/ticket.styles'

interface ITicketInfromation {
  time: string
  date: string
  order: string
  cinema: string
  technology: string
  seat: string
}

export const TicketInformation = memo<ITicketInfromation>(({ ...rest }) => {
  
  const _item = (title: string, value: string) => {
    return (
      <View style={{ margin: 20, width: 75 }}>
        <View >
          <Text style={typography.title}>{title[0].toUpperCase() + title.slice(1)}</Text>
        </View>
        <View 
          style={{
            alignItems: 'flex-start', 
          }}
        >
          <Text style={typography.text}>{value}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          Object.entries(rest).map((v, i) => 
            <View key={i}>{_item(v[0], v[1])}</View>
          )
        }
    </View>
  )
})
