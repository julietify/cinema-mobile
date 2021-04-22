import React, { FC } from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native'

import { TicketInformation } from '../../components/ticket/ticket/ticket.information'
import { TicketCode } from '../../components/ticket/ticket/ticket.code'
import { ImageSvg } from '../../components/ticket/image/ticket.image'


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

export const TicketContainer: FC<ITicketContainerProps> = ({
  code,
  time,
  date,
  name,
  cinema,
  order,
  technology,
  seat,
}) => {


  const { width } = useWindowDimensions()
  const iWidth = width * .75

  return (
    <View style={[{...styles.wrapper},{width:width}]}>
      <View style={[{...styles.container},{width:iWidth}]}>
        <TicketInformation
          name={name}
          time={time}
          date={date}
          cinema={cinema}
          order={order}
          technology={technology}
          seat={seat}
        />
        <ImageSvg iWidth={iWidth} iHeight={20} />
        <TicketCode code={code} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create( {
  wrapper: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  container: {
    elevation: 25,
    borderRadius: 1
  },
})

/*
<View style={styles.buttonsContainer}>
          <ButtonBack />
        </View>
 */