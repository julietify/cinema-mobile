import React, { FC } from "react"
import {View, FlatList, StyleSheet } from "react-native"

import { TicketCard } from "../../components/ticket/cards/ticket.card" 
import { useRedirect } from "../../hooks/useRedirect"

import { tickets } from '../../utils/tickets'

export const Tickets: FC = () => {

  const { redirectoToTicketScreen } = useRedirect()

  //const [tickets, setTickets] = useState([])
  //if(!tickets.length) return <TicketsError />

  return (
    <View style={styles.wrapper}>
      <FlatList 
        data={tickets}
        renderItem={({ item }) => 
          <TicketCard 
            name={item.name} 
            cinema={item.cinema} 
            tickets={item.tickets.length} 
            price={item.price} 
            ticketId={item.order}
            onPress={redirectoToTicketScreen}
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