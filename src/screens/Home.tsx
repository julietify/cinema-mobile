import React, { FC } from "react"
import { View, FlatList } from "react-native"

import { FilmCard } from "../components/common/film.card"
import { FilterContainer } from "../components/film/filter/filter.container"

import { useRedirect } from "../hooks/useRedirect"
import { films } from "../utils/films"

export const Home: FC = () => {  

  const { redirectoToFilmScreen } = useRedirect()

  return (
    <View style={{ backgroundColor: '', flex: 1, alignItems: 'center' }}>
      <FilterContainer />
      <FlatList 
        data={films}
        renderItem={({ item }) => 
          <FilmCard 
            onPress={redirectoToFilmScreen} 
            name={item.name} 
            picture={item.poster}
            id={item.id} 
          />
        }
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        decelerationRate={0.99}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
