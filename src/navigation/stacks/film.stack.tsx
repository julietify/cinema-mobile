import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/film/Film'

type FilmStackParams = {
  FilmRoot: {
    filmId: string
  }
}

const FilmStack = createStackNavigator<FilmStackParams>()

export type FilmRouteProp = RouteProp<FilmStackParams, 'FilmRoot'>

export const FilmStackScreen = () => (
  <FilmStack.Navigator initialRouteName='FilmRoot'>
    <FilmStack.Screen name="FilmRoot" component={Film} />
  </FilmStack.Navigator>
)