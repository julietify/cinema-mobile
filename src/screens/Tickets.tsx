import React, { FC, useState } from "react"
import { Text, View, StyleSheet } from "react-native"

import { TicketsError } from '../components/errors/tickets.error'

export const Tickets: FC = () => {

  const [tickets, setTickets] = useState([])

  if(!tickets.length) return <TicketsError />

  return (
    <View style={styles.container}>
      <Text>screen page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 1
  }
})

