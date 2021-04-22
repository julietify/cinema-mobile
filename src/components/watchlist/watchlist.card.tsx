import React, { FC } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IWatchlistCardProps {
  filmId: string
  name: string
  picture: string
}

export const WatchlistCard: FC<IWatchlistCardProps> = ({
  filmId,
  name,
  picture
}) => {

  return (
    <View style={{...styles.container}}>
      <View style={styles.picture}>
        <Image 
          source={{ uri: picture }}
          style={{
            width: 65,
            height: 90,
            resizeMode: 'stretch',
            borderRadius: 30
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={{ marginVertical: 10, color: 'gray' }}>Action Drama</Text>
        <Text style={{ marginVertical: 5, color: 'gray' }}>125 UAH</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Icon name='delete' size={20} color='#f44336' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 15
  },
  infoContainer: {
    marginLeft: 30,
    width: '60%'
  },
  picture: {
    elevation: 10,
    borderRadius: 5,
    width: 70,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})