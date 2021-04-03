import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { palette } from '../../theme/palette'

export const renderBarIcons = (value: string, focused: boolean) => {
  switch (value) {
    case 'Home':
      return (
        focused
          ? <Icon name='home' size={25} color={palette.theme.dark} />
          : <Icon name='home-outline' size={25} color='gray' />
      )
    case 'Tickets':
      return (
        focused
          ? <Icon name='ticket-confirmation' size={25} color={palette.theme.dark} />
          : <Icon name='ticket-confirmation-outline' size={25} color='gray' />
      )
    case 'Watchlist':
      return (
        focused
          ? <Icon name='heart' size={25} color={palette.theme.dark} />
          : <Icon name='heart-outline' size={25} color='gray' />
      )
    case 'Calendar':
      return (
        focused
          ? <Icon name='calendar' size={25} color={palette.theme.dark} />
          : <Icon name='calendar-outline' size={25} color='gray' />
      )
  }
}

export const options = {
  showLabel: false
}