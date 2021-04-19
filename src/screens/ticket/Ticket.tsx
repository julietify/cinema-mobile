import React, { FC } from 'react'
import { View, useWindowDimensions } from 'react-native'

import { TicketInformation } from '../../components/ticket/ticket/ticket.information'
import { TicketName } from '../../components/ticket/ticket/ticket.name'
import { TicketCode } from '../../components/ticket/ticket/ticket.code'
import { ImageSvg } from '../../components/ticket/image/ticket.image'
import { LineSvg } from '../../components/ticket/image/ticket.line'

interface ITicketProps {
  code: String
  time: String
  date: String
  name: String
  cinema: String
  order: String
  age: String
  technology: String
  price: String
  iWidth: number
  iHeight: number
  lineHeight: number
  sited: String
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
  sited
}) => {
  const { width } = useWindowDimensions()

  return (
    <View style={{width:width,alignItems:'center',justifyContent:'center'}}>
      <View style={{ width: iWidth }}>
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
      </View>
    </View>
  )
}