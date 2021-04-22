import React, { memo } from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { TicketInformation } from './ticket.information'
import { TicketCode } from './ticket.code'
import { ImageSvg } from '../image/ticket.image'

import { Title1 } from '../../ui/typography/title'

interface ITicketContainerProps {
  code: string
  time: string
  date: string
  name: string
  cinema: string
  order: string
  technology: string
  seat: string
}

export const TicketItem = memo<ITicketContainerProps>(({
  code,
  time,
  date,
  name,
  cinema,
  order,
  technology,
  seat
}) => {

  const { width } = useWindowDimensions()
  const { colors } = useTheme()

  const iWidth = width * .7
  const iHeight = iWidth * 1.5

  console.log('render ticket')

  return (
    <View style={{...styles.wrapper, width}}>
      <View 
        style={{
          ...styles.container, 
          width: iWidth, 
          height: iHeight,
          backgroundColor: colors.card
        }}
      >
        <Title1 style={{ fontSize: 16 }}>{name}</Title1>
        <TicketInformation
          time={time}
          date={date}
          cinema={cinema}
          order={order}
          technology={technology}
          seat={seat}
        />
        <TicketCode code={code} />
      </View>
    </View>
  )
})

const styles = StyleSheet.create( {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    elevation: 15,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between'
  }
})
