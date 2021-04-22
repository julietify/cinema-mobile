import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/film/Film'
import { Trailers } from '../../screens/film/Trailers'

type FilmStackParams = {
  RootFilm: {
    filmId: string
  },
  Trailers: {
    filmId: string
  }
}

const FilmStack = createStackNavigator<FilmStackParams>()

export type FilmRouteProp = RouteProp<FilmStackParams, 'RootFilm'>
export type TrailersRouteProp = RouteProp<FilmStackParams, 'Trailers'>

export const FilmStackScreen = () => (
  <FilmStack.Navigator initialRouteName='RootFilm' headerMode='none'>
    <FilmStack.Screen name="RootFilm" component={Film} />
    <FilmStack.Screen name="Trailers" component={Trailers}/>
  </FilmStack.Navigator>
)