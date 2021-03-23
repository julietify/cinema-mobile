import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const renderBarIcons = (value: string, focused: boolean) => {
  switch(value) {
    case 'Home':
      return (
        focused
        ? <Icon name='home' size={25} color='black' />
        : <Icon name='home' size={25} color='orange' />
      )
    case 'Tickets':
      return (
        focused
        ? <Icon name='ticket-confirmation' size={25} color='black' />
        : <Icon name='ticket-confirmation' size={25} color='orange' />
      )
    case 'Watchlist':
      return (
        focused
        ? <Icon name='heart' size={25} color='black' />
        : <Icon name='heart' size={25} color='orange' />
      )
  }
}