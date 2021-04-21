import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Tickets } from '../../screens/ticket/Tickets'
import { TicketContainer } from '../../components/ticket/ticket.container'

import { screenConfig } from '../config/screen.config'

type TicketStackParams = {
  RootTicket: undefined
  Ticket: {
    ticketId: string
  }
}

const TicketStack = createStackNavigator<TicketStackParams>()

export type TicketRouteProp = RouteProp<TicketStackParams, 'Ticket'>

export const TicketStackScreen = () => (
  <TicketStack.Navigator initialRouteName='RootTicket' headerMode='none' 
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
  >
    <TicketStack.Screen name="RootTicket" component={Tickets} options={screenConfig.ticket} />
    <TicketStack.Screen name="Ticket" component={TicketContainer}  />
  </TicketStack.Navigator>
)