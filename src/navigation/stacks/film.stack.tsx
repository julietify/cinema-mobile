import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Film } from '../../screens/film/Film'
import { Trailers } from '../../screens/trailer/Trailers'
import { Trailer } from '../../screens/trailer/Trailer'
import { Booking } from '../../screens/booking/Booking'

type FilmStackParams = {
  RootFilm: {
    filmId: string
  },
  Trailers: {
    filmId: string
  },
  Trailer: {
    trailerId: string
  },
  Booking: {
    filmId: string
  }
}

const FilmStack = createStackNavigator<FilmStackParams>()

export type FilmRouteProp = RouteProp<FilmStackParams, 'RootFilm'>
export type TrailersRouteProp = RouteProp<FilmStackParams, 'Trailers'>
export type TrailerRouteProp = RouteProp<FilmStackParams, 'Trailer'>
export type BookingRouteProp = RouteProp<FilmStackParams, 'Booking'>

export const FilmStackScreen = () => (
  <FilmStack.Navigator initialRouteName='RootFilm' headerMode='none'>
    <FilmStack.Screen name="RootFilm" component={Film} />
    <FilmStack.Screen name="Booking" component={Booking} />
    <FilmStack.Screen name="Trailers" component={Trailers} />
    <FilmStack.Screen name="Trailer" component={Trailer} />
  </FilmStack.Navigator>
)