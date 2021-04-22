import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../../screens/Home'
import { Tickets } from '../../screens/ticket/Tickets'
import { Watchlist } from '../../screens/Watchlist'
import { Calendar } from '../../screens/Calendar'

import { TicketStackScreen } from '../stacks/ticket.stack'

import { renderBarIcons, options } from './bottom.bar.config'

const Tab = createBottomTabNavigator()

export const BottomTabBar: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => renderBarIcons(route.name, focused)
      })
    }
      tabBarOptions={options}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Tickets' component={TicketStackScreen} />
      <Tab.Screen name='Watchlist' component={Watchlist} />
      <Tab.Screen name='Calendar' component={Calendar} />
    </Tab.Navigator>
  )
}