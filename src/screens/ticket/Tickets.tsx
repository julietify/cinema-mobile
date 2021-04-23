import React, { FC } from "react"
import {View, FlatList, StyleSheet } from "react-native"
import { Heading } from "../../components/common/heading"

import { TicketCard } from "../../components/ticket/cards/ticket.card" 
import { useRedirect } from "../../hooks/useRedirect"

import { tickets } from '../../utils/tickets'

export const Tickets: FC = () => {

  const { redirectToTicketScreen } = useRedirect()

  //const [tickets, setTickets] = useState([])
  //if(!tickets.length) return <TicketsError />

  return (
    <View style={styles.wrapper}>
      <Heading value='Tickets' />
      <FlatList 
        data={tickets}
        renderItem={({ item }) => 
          <TicketCard 
            name={item.name} 
            cinema={item.cinema} 
            tickets={item.tickets.length} 
            ticketId={item.order}
            onPress={redirectToTicketScreen}
          />
        }
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center'
  }
})