import React, { FC, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import type { TicketRouteProp } from '../../navigation/stacks/ticket.stack'

import { tickets } from '../../utils/tickets'
import { TicketContainer } from '../../components/ticket/ticket.container'
import { ClientInformation } from '../../components/ticket/cards/client.information'

import { ButtonBack } from '../../components/ui/buttons/button.back'
import { FlatList } from 'react-native-gesture-handler'

interface ITicketProps {
  route: TicketRouteProp
}
export const Ticket: FC<ITicketProps> = ({
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
            <TicketContainer
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
      <ClientInformation
        client={ticket.client}
        price={ticket.price}
        />
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