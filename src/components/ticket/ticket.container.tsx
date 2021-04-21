import React, { FC, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import type { TicketRouteProp } from '../../navigation/stacks/ticket.stack'

import { tickets } from '../../utils/tickets'
import { Ticket } from '../../screens/ticket/Ticket'
import { ClientInformation } from './cards/client.informatin'

import { ButtonBack } from '../ui/buttons/button.back'
import { FlatList } from 'react-native-gesture-handler'

interface ITicketContainerProps {
  route: TicketRouteProp
}
export const TicketContainer: FC<ITicketContainerProps> = ({
  route
}) => {

  const { ticketId } = route.params

  /*const iHeight = iWidth / 15
  const lineHeight = iWidth / 80*/

  const [ticket] = useState(() => tickets.filter(ticket => ticket.order === ticketId)[0])

  return (
    <View style={styles.wrapper}>
      <View style={styles.ticketContainer}>
        <FlatList
          data={ticket.tickets}
          renderItem={({ item }) =>
            <Ticket
              key={item.seat}
              name={ticket.name}
              code={item.code}
              time={ticket.startTime}
              date={ticket.date}
              cinema={ticket.cinema}
              order={ticket.order}
              seat={item.seat}
              technology={ticket.technology}
            />
          }
          keyExtractor={(_, index) => index.toString()}
          horizontal
          decelerationRate={0.99}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ClientInformation client={ticket.client} price={ticket.price}/>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 120
  },
  ticketContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

/*
<View style={styles.buttonsContainer}>
          <ButtonBack />
        </View>
 */