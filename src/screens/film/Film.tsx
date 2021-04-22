import React, { FC, useState, useEffect } from "react"
import { View, ScrollView } from "react-native"

import { FilmCard } from "../../components/common/film.card"
import { Info } from "../../components/film/views/info.view"
import { Rating } from "../../components/film/views/rating.view"
import { CastList } from "../../components/cast/cast.list"

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

import { filmStyles } from "../../components/film/styles/film.styles"

import { useRedirect } from "../../hooks/useRedirect"

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

  const { redirectoToTrailersScreen } = useRedirect()

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

  return (
    <View style={filmStyles.container}>
      <Wrapper uri={film.poster}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={filmStyles.buttonsContainer}>
            <ButtonBack />
            <ButtonLike />
          </View>
          <FilmCard
            picture={film.poster}
            onPress={() => { }}
          />
          <View style={filmStyles.nameContainer}>
            <Title>{filmOmdb.Title}</Title>
          </View>
          <View style={filmStyles.trailerContainer}>
            <ButtonIcon
              iconName='play'
              text='Watch trailer'
              onPress={() => redirectoToTrailersScreen(filmId)}
              {...trailerButton}
            />
            <Info time={filmOmdb.Runtime} genre={filmOmdb.Genre} />
          </View>
          <View style={filmStyles.filmRating}>
            <Rating imdbRating={filmOmdb.imdbRating} rating={filmOmdb.Ratings}/>
          </View>
          <ViewWrapper title='Storyline'>
            <Body2>{filmOmdb.Plot}</Body2>
          </ViewWrapper>
          <ViewWrapper title='Actors'>
            <CastList filmId={filmId} />
          </ViewWrapper>
        </ScrollView>
        <View style={filmStyles.bookContainer}>
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