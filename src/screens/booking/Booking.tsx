import React, { FC } from "react"
import { View, Text } from 'react-native'

import type { BookingRouteProp } from '../../navigation/stacks/film.stack'

interface IBookingProps {
  route: BookingRouteProp
}

export const Booking: FC<IBookingProps> = ({
  route
}) => {

  const { filmId } = route.params

  return (
    <View><Text>{filmId}</Text></View>
  )
}