import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/film/Film'

type FilmStackParams = {
  RootFilm: {
    filmId: string
  }
}

const FilmStack = createStackNavigator<FilmStackParams>()

export type FilmRouteProp = RouteProp<FilmStackParams, 'RootFilm'>

export const FilmStackScreen = () => (
  <FilmStack.Navigator initialRouteName='RootFilm' headerMode='none'>
    <FilmStack.Screen name="RootFilm" component={Film} />
  </FilmStack.Navigator>
)