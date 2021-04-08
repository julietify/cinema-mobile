import React, { FC } from "react"
import { View, FlatList } from "react-native"

import { FilmCard } from "../components/common/film.card"
import { FilterContainer } from "../components/film/filter/filter.container"

import { useRedirect } from "../hooks/useRedirect"

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

const films = [
  {
    id: '1',
    name: 'No Time To Die',
    poster: 'https://karavan.ua/wp-content/uploads/2019/12/74682950_738377696672108_7910429065208903771_n.jpg'
  },
  {
    id: '2',
    name: 'Below Zero',
    poster: 'https://media2.firstshowing.net/firstshowing/img11/BelowZeroSpanishposterbigimg5991.jpg'
  },
  {
    id: '3',
    name: 'Tom & Jerry',
    poster: 'https://media.kg-portal.ru/movies/t/tomandjerry/posters/tomandjerry_3.jpg'
  },
  {
    id: '4',
    name: 'The Dig',
    poster: 'https://kritikanstvo.ru/movies/t/thedig/posters/thedig_300858.jpg'
  },
  {
    id: '5',
    name: 'Bliss',
    poster: 'https://i2.wp.com/media-news.com.ua/wp-content/uploads/2021/01/Bliss-poster.jpg?ssl=1'
  }
]