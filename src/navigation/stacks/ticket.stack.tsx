import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { TicketContainer } from '../../components/ticket/ticket.container'

type TicketStackParams = {
  RootTicket: {
    ticketOrder: string
  }
}

const TicketStack = createStackNavigator<TicketStackParams>()

export type TicketRouteProp = RouteProp<TicketStackParams, 'RootTicket'>

export const TicketStackScreen = () => (
  <TicketStack.Navigator initialRouteName='RootTicket' headerMode='none'>
    <TicketStack.Screen name="RootTicket" component={TicketContainer} />
  </TicketStack.Navigator>
)