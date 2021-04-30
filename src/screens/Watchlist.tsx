import React, { FC } from "react"
import { View, StyleSheet, FlatList } from "react-native"

import { Heading } from "../components/common/heading"
import { Card } from "../components/common/card"

import { useRedirect } from "../hooks/useRedirect"

import { liked } from '../utils/liked'

export const Watchlist: FC = () => {

  const { redirectToFilmScreen } = useRedirect()
  
  return (
    <View style={styles.wrapper}>
      <Heading value='Watchlist' />
      <FlatList 
        data={liked}
        renderItem={({ item }) => 
          <Card
            id={item.filmId}
            onPress={redirectToFilmScreen}
            lines={[item.name,item.genre,item.date]}
            poster={item.poster}
          />
        }
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    alignItems:'center'
  } 
})