import React, { FC, useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import type { TrailersRouteProp } from '../../navigation/stacks/film.stack'
import { useRedirect } from "../../hooks/useRedirect"

import { tmdbApi } from '../../api/tmdb.api'

import { Title } from '../../components/ui/typography/title'
import { useTheme } from '@react-navigation/native'

import { TrailerCard } from '../../components/trailer/cards/trailer.card'


interface ITrailersProps {
  route: TrailersRouteProp
}

export const Trailers: FC<ITrailersProps> = ({
  route
}) => {

  const { filmId } = route.params
  const { colors } = useTheme()

  const { redirectoToTrailerScreen } = useRedirect()

  const [trailers, setTrailers] = useState([])

  useEffect(() => {
    const getTrailers = async () => {
      const castResponse = await tmdbApi().trailers(filmId)
      setTrailers(castResponse)
    }

    getTrailers()

  }, [])
  
  const arrow = trailers.filter(i => i.type === 'Trailer');
  console.log(arrow)

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 75, marginHorizontal: 20 }}>
        <Title color={colors.text}>Trailers</Title>
      </View>
      <FlatList
        data={arrow}
        renderItem={({ item }) =>
          <TrailerCard
            name={item.name}
            picture={item.key}
          />
        }
        keyExtractor={(_, index) => index.toString()}
        decelerationRate={0.99}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})