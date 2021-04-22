import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

import { palette } from '../../../theme/palette'
import { Title, Body1 } from "../../ui/typography/title"

import { IOmdbRating } from '../../../interfaces/IOmdb'

interface IFilmRating{
  imdbRating: string
  rating: Array<IOmdbRating>
}

export const Rating = memo<IFilmRating>(({
  rating
}) => {

  if (!rating.length) return null

  const newRating = rating.map((item, index) => index === 0 ? {...item, Source: 'IMDb'} : item)

  const _ratingItem = (source: string, value: string, key: number) => {
    return (
      <View key={key} style={styles.ratingItemContainer}>
        <Title fontSize='13px'>{value}</Title>
        <Body1>{source}</Body1>
      </View>
    )
  }

  return(
    <View style={styles.container}>
      { newRating.map((i, index) => _ratingItem(i.Source, i.Value, index)) }
    </View>
  )

})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 20,
    backgroundColor: palette.main.silver,
    borderRadius: 20
  },
  ratingItemContainer: {
    alignItems: 'center'
  }
})