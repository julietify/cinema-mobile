import React, { FC } from "react"
import { Text, View } from "react-native"

import { Heading } from "../components/common/heading"
import { WatchlistCard } from "../components/watchlist/watchlist.card"

export const Watchlist: FC = () => {
  return (
    <View>
      <Heading value='Watchlist' />
      <WatchlistCard  filmId='SS' name='ss' picture='s' />
    </View>
  )
}