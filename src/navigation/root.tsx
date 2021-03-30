import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { BottomTabBar } from './bars/bottom.bar'
import { Auth } from '../screens/auth/Auth'

import { login } from '../redux/auth/thunks'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'

const Stack = createStackNavigator()

export const RootStackScreen: FC = () => {

  const { checking, isAuthenticated, isGuest } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  if(checking) {
    dispatch(login())

    return <View style={{ flex: 1}}>
      <Text>Checking auth</Text>
    </View>
  }

  return (
    <Stack.Navigator>
      {
        isAuthenticated || isGuest
        ? <Stack.Screen 
            name='root' 
            component={BottomTabBar} 
          />
        : <Stack.Screen 
            name='signin' 
            component={Auth} 
            options={{
              headerShown: false
            }}
          />
      }
    </Stack.Navigator>
  )
}