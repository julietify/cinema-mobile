import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const ButtonTrailer = memo(() => {

  return (
    <TouchableOpacity  
      style={{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(220,200,200,0.3)',
        paddingLeft:10,
        paddingRight:20,
        paddingVertical:10,
        borderRadius:200
      }}
    >
      <Icon name='play' size={25} color='#161616' style={{marginRight:10}}/>
      <Text style={{fontSize:16}}>Watch trailer</Text>
    </TouchableOpacity>
  )
})