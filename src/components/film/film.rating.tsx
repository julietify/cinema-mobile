import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

import { Title, Body1 } from "../ui/typography/title"

interface IFilmRating{
  imdbRating
  rating
}

export const FilmRating = memo<IFilmRating>(({
  rating,
  imdbRating
}) => {
  let arrow = rating.slice(1)
  arrow.push({"Source": "iMDb", "Value": `${imdbRating}`})
  return(
    <View style={styles.wrapper}>
      {arrow.map( i => <View key={i.Source} style={styles.container}>
        <Title style={{fontSize:22}}>{i.Value}</Title>
        <Body1>{i.Source}</Body1>
      </View>)}
    </View>
  )

})

const styles = StyleSheet.create({
  wrapper: {
    flexDirection:'row',
  },
  container: {
    alignItems:'center',
  }
  
})