import React, { FC } from 'react'
import { View, useWindowDimensions, Text } from 'react-native'

import { TicketInformation } from '../../components/ticket/ticket/ticket.information'
import { TicketName } from '../../components/ticket/ticket/ticket.name'
import { TicketCode } from '../../components/ticket/ticket/ticket.code'
import { ImageSvg } from '../../components/ticket/image/ticket.image'
import { LineSvg } from '../../components/ticket/image/ticket.line'

import type { TicketRouteProp } from '../../navigation/stacks/ticket.stack'

interface ITicketProps  {
  code: string
  time: string
  date: string
  name: string
  cinema: string
  order: string
  age: string
  technology: string
  price: string
  iWidth: number
  iHeight: number
  lineHeight: number
  sited: string
  route: TicketRouteProp
}

export const Ticket: FC<ITicketProps> = ({
  code,
  time,
  date,
  name,
  cinema,
  order,
  age,
  technology,
  price,
  iWidth,
  iHeight,
  lineHeight,
  sited,
  route
}) => {

  const { ticketId } = route.params

  const { width } = useWindowDimensions()

  return (
    <View>
      <Text>ticket id {ticketId}</Text>
      {/* <View style={{ width: iWidth }}>
        <TicketName name={name} />
        <LineSvg Iwidth={iWidth} height={lineHeight} />
        <TicketInformation
          time={time}
          date={date}
          cinema={cinema}
          order={order}
          age={age}
          technology={technology}
          price={price}
          sited={sited}
        />
        <ImageSvg Iwidth={iWidth} height={iHeight} />
        <TicketCode code={code} />
      </View> */}
    </View>
  )
}