import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import { BottomTabBar } from './bars/bottom.bar'

const Stack = createStackNavigator()

export const RootStackScreen: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='root' component={BottomTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}