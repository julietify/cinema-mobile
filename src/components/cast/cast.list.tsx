import React, { memo, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { tmdbApi } from "../../api/tmdb.api"

import { ActorCard } from "./cards/actor.card"

export const CastList = memo<{filmId: string}>(({
  filmId
}) => {

  const [cast, setCast] = useState([])

  useEffect(() => {
    
    const getCast = async () => {
      const castResponse = await tmdbApi().cast(filmId)
      setCast(castResponse)
    }

    getCast()

  }, [])
  
  return (
    <FlatList
      data={cast}
      renderItem={({ item }) =>
        <ActorCard
          actorName={item.name}
          actorRole={item.character}
          picture={item.profile_path}
        />
      }
      keyExtractor={(_, index) => index.toString()}
      horizontal
      decelerationRate={0.99}
      showsHorizontalScrollIndicator={false}
    />
  ) 
})