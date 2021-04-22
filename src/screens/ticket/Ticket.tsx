import React, { FC, useCallback, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { TicketItem } from '../../components/ticket/ticket/ticket.item'
import { ClientInformation } from '../../components/ticket/ticket/client.information'

import { Title1 } from '../../components/ui/typography/title'

import { tickets } from '../../utils/tickets'
import type { TicketRouteProp } from '../../navigation/stacks/ticket.stack'

interface ITicketProps {
  route: TicketRouteProp
}
export const Ticket: FC<ITicketProps> = ({
  route
}) => {

  const { ticketId } = route.params
  const [currentTicket, setCurrentTicket] = useState(null)

  const [ticket] = useState(() => tickets.filter(ticket => ticket.order === ticketId)[0])

  const _onViewableItemsChanged = useCallback(({ viewableItems }) => {
    // console.log('viewable item', viewableItems)
    setCurrentTicket(viewableItems[0].index + 1)
  }, [])

  return (
    <View style={styles.wrapper}>
      <View style={styles.counterContainer}>
        <Title1>{currentTicket} of {ticket.tickets.length} Tickets</Title1>
      </View>
      <View style={styles.ticketContainer}>
        <FlatList
          data={ticket.tickets}
          renderItem={({ item }) =>
            <TicketItem
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
          pagingEnabled
          decelerationRate={0.99}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={_onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50
          }}
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
    flex: 1
  },
  ticketContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterContainer: {
    margin: 20
  }
})
