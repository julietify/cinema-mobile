import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/film/Film'
import { Trailer } from '../../screens/film/Trailer'

type FilmStackParams = {
  RootFilm: {
    filmId: string
  },
  Trailer: {
    filmId: string
  }
}

const FilmStack = createStackNavigator<FilmStackParams>()

export type FilmRouteProp = RouteProp<FilmStackParams, 'RootFilm'>
export type TrailerRouteProp = RouteProp<FilmStackParams, 'Trailer'>

export const FilmStackScreen = () => (
  <FilmStack.Navigator initialRouteName='RootFilm' headerMode='none'>
    <FilmStack.Screen name="RootFilm" component={Film} />
    <FilmStack.Screen name="Trailer" component={Trailer}/>
  </FilmStack.Navigator>
)