import React, { FC, memo } from "react"
import { FlatList } from "react-native"

import { actors } from "../../utils/actors"
import { ActorCard } from "./cards/actor.card"

export const CastList = memo(() => {
  
  return (
    <FlatList
      data={actors}
      renderItem={({ item }) =>
        <ActorCard
          actorName={item.name}
          actorRole={item.role}
          picture={item.poster}
        />
      }
      keyExtractor={(_, index) => index.toString()}
      horizontal
      decelerationRate={0.99}
      showsHorizontalScrollIndicator={false}
    />
  ) 
})