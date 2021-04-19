import React, { FC, useState } from "react"
import {View, FlatList, StyleSheet } from "react-native"
import { TicketsCard } from "../components/common/tickets.card"

import { useRedirect } from "../hooks/useRedirect"

import { tickets } from '../utils/tickets'

export const Tickets: FC = () => {

  //const [tickets, setTickets] = useState([])
  //if(!tickets.length) return <TicketsError />

  const { redirectoToTicketScreen } = useRedirect()
  return (
    <View style={styles.wrapper}>
      <FlatList 
        data={tickets}
        renderItem={({ item }) => 
          <TicketsCard 
            onPress={redirectoToTicketScreen} 
            name={item.name} 
            order={item.order}
            cinema={item.cinema}
            tickets={item.tickets}
          />
        }
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        decelerationRate={0.99}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center'
  },
})