import React, { FC, useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { Title } from '../../components/ui/typography/title'
import { TrailerCard } from '../../components/trailer/cards/trailer.card'

import { useRedirect } from "../../hooks/useRedirect"
import { tmdbApi } from '../../api/tmdb.api'

import type { TrailersRouteProp } from '../../navigation/stacks/film.stack'

interface ITrailersProps {
  route: TrailersRouteProp
}

export const Trailers: FC<ITrailersProps> = ({
  route
}) => {

  const { filmId } = route.params
  
  const [trailers, setTrailers] = useState([])

  const { colors } = useTheme()
  const { redirectToTrailerScreen } = useRedirect()

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
            trailerId={item.key}
            onPress={redirectToTrailerScreen}
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