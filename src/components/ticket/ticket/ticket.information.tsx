import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { palette } from '../../../theme/palette'

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
          <Text style={styles.title}>{title[0].toUpperCase() + title.slice(1)}</Text>
        </View>
        <View 
          style={{
            alignItems: 'flex-start', 
          }}
        >
          <Text style={styles.text}>{value}</Text>
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

const styles = StyleSheet.create({
  text: {
    color: palette.theme.dark,
    fontWeight: '700',
    fontSize: 12,
    marginTop: 10
  },
  title: {
    color: 'rgba(0, 0, 0, .3)',
    fontWeight: 'bold',
    fontSize: 12
  }
})