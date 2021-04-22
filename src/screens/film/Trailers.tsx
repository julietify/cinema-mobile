import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import type { TrailersRouteProp } from '../../navigation/stacks/film.stack'
import { useRedirect } from "../../hooks/useRedirect"
import { Title } from '../../components/ui/typography/title'
import { useTheme } from '@react-navigation/native'

interface ITrailersProps {
  route: TrailersRouteProp
}

export const Trailers: FC<ITrailersProps> = ({
 route
}) => {

  const { filmId } = route.params
  const { colors } = useTheme()
  const { redirectoToTrailerScreen } = useRedirect()
  
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 75, marginHorizontal: 20 }}>
        <Title color={colors.text}>Trailers</Title>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})