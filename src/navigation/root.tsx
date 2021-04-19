import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { BottomTabBar } from './bars/bottom.bar'
import { Auth } from '../screens/auth/Auth'
import { ProfileStackScreen } from './stacks/profile.stack'
import { FilmStackScreen } from './stacks/film.stack'
import { TicketStackScreen } from'./stacks/ticket.stack'

import { login } from '../redux/auth/thunks'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'

import { authHeaderConfig, rootHeaderConfig } from './config/header.config'
import { screenConfig } from './config/screen.config'

const Stack = createStackNavigator()

export const RootStackScreen: FC = () => {

  const { checking, isAuthenticated } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  if(checking) {
    dispatch(login())

    return <View style={{ flex: 1}}>
      <Text>Checking auth</Text>
    </View>
  }

  return (
    <Stack.Navigator screenOptions={rootHeaderConfig}>
      {
        !isAuthenticated && (
          <Stack.Screen 
            name='SignIn'
            component={Auth}
            options={authHeaderConfig}
          />
        )
      }
      <Stack.Screen 
        name='root'
        component={BottomTabBar}
      />
      <Stack.Screen 
        name='RootProfile'
        component={ProfileStackScreen}
        options={screenConfig.profile}
      />
      <Stack.Screen 
        name='RootFilm'
        component={FilmStackScreen}
        options={screenConfig.film}
      />
      <Stack.Screen 
        name='RootTicket'
        component={TicketStackScreen}
        options={screenConfig.Ticket}
      />
    </Stack.Navigator>
  )
}