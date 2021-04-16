import React, { FC, useState, useEffect } from "react"
import { View, StyleSheet, ScrollView, FlatList } from "react-native"

import { FilmCard } from "../../components/common/film.card"
import { Info } from "../../components/film/views/info.view"
import { ActorCard } from '../../components/cast/cards/actor.card'
import { FilmRating } from '../../components/film/film.rating'

import { Wrapper } from "../../components/film/wrappers/film.wrapper"
import { ViewWrapper } from "../../components/film/wrappers/view.wrapper"

import { ButtonBack } from "../../components/ui/buttons/button.back"
import { ButtonLike } from "../../components/film/watchlist/button.like"
import { ButtonIcon } from "../../components/ui/buttons/button.icon"
import { Title, Body2 } from "../../components/ui/typography/title"

import type { FilmRouteProp } from '../../navigation/stacks/film.stack'

import { palette } from "../../theme/palette"
import { films } from '../../utils/films'

import { omdbApi } from '../../api/omdb.api'
import { IOmdbResponse } from '../../interfaces/IOmdb'
import { Loader } from '../../components/common/loader'

import { actors } from "../../utils/actors"

interface IFilmProps {
  route: FilmRouteProp
}

export const Film: FC<IFilmProps> = ({
  route
}) => {

  const { filmId } = route.params

  const [filmOmdb, setFilmOmdb] = useState<IOmdbResponse>({} as IOmdbResponse)
  const [loading, setLoading] = useState(true)
  const [film] = useState(() => films.filter(film => film.id === filmId)[0])

  useEffect(() => {
    let isActive = true

    const fetchFilm = async () => {
      try {
        const res = await omdbApi().film(filmId)

        if (isActive) {
          setFilmOmdb(res.data)
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchFilm()

    return () => {
      isActive = false
    }

  }, [filmId])

  if (loading) return <Loader />
  console.log(filmOmdb.imdbRating)

  return (
    <View style={styles.container}>
      <Wrapper uri={film.poster}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.buttonsContainer}>
            <ButtonBack />
            <ButtonLike />
          </View>
          <FilmCard
            picture={film.poster}
            onPress={() => { }}
          />
          <View style={styles.nameContainer}>
            <Title>{filmOmdb.Title}</Title>
          </View>
          <View style={styles.trailerContainer}>
            <ButtonIcon
              iconName='play'
              text='Watch trailer'
              onPress={() => { }}
              {...trailerButton}
            />
            <Info time={filmOmdb.Runtime} genre={filmOmdb.Genre} />
          </View>
          <View style={styles.filmRating}>
            <FilmRating rating={filmOmdb.Ratings}/>
          </View>
          <ViewWrapper title='Storyline'>
            <Body2>{filmOmdb.Plot}</Body2>
          </ViewWrapper>
          <ViewWrapper title='Actors'>
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
          </ViewWrapper>
        </ScrollView>
        <View style={styles.bookContainer}>
          <ButtonIcon
            text='Book now'
            iconName='ticket-confirmation'
            onPress={() => { }}
            {...bookButton}
          />
        </View>
      </Wrapper>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  trailerContainer: {
    alignItems: 'center'
  },
  filmRating: {
    alignItems:'center',
  },
  bookContainer: {
    bottom: 0,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

const trailerButton = {
  brRadius: 30,
  p: 10,
  w: 160,
  bgColor: palette.main.silver
}

const bookButton = {
  brRadius: 15,
  p: 13,
  bgColor: palette.main.lightblue
}