import React, { FC } from "react"
import { View, FlatList, StyleSheet } from "react-native"

import { Heading } from "../../components/common/heading"
import { Card } from "../../components/common/card" 

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
          <Card
            lines={[
              item.name,
              item.cinema,
              `${item.tickets.length} Tickets`
            ]}
            id={item.order}
            poster={item.poster}
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