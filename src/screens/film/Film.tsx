import React, { FC, useState, useEffect } from "react"
import { View, StyleSheet, ScrollView, Text } from "react-native"

import { FilmCard } from "../../components/common/film.card"
import { Info } from "../../components/film/views/info.view"

import { Wrapper } from "../../components/film/wrappers/film.wrapper"
import { ViewWrapper } from "../../components/film/wrappers/view.wrapper"

import { ButtonBack } from "../../components/ui/buttons/button.back"
import { ButtonIcon } from "../../components/ui/buttons/button.icon"
import { Title, Body2 } from "../../components/ui/typography/title"

import type { FilmRouteProp } from '../../navigation/stacks/film.stack'

import { palette } from "../../theme/palette"
import { films } from '../../utils/films'

import { omdbApi } from '../../api/omdb.api'
import { IOmdbResponse } from '../../interfaces/IOmdb'

interface IFilmProps {
  route: FilmRouteProp
}

export const Film: FC<IFilmProps> = ({
  route
}) => {

  const { filmId } = route.params

  const [filmOmdb, setFilmOmdb] = useState<IOmdbResponse>({} as IOmdbResponse)

  useEffect(() => {
    let isActive = true

    const fetchFilm = async () => {
      try {
        const res = await omdbApi().film(filmId)
        
        if (isActive) {
          setFilmOmdb(res.data)
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
  
  console.log(filmOmdb)

  const [film] = useState(() => films.filter(film => film.id === filmId)[0])

  return (
    <>
      <View style={styles.container}>
        <Wrapper uri={film.poster}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ButtonBack />
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
            <ViewWrapper title='Storyline'>
              <Body2>{filmOmdb.Plot}</Body2>
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
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nameContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  trailerContainer: {
    alignItems: 'center'
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