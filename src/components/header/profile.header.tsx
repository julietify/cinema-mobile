import React, { memo } from 'react'
import { Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { UserAvatar } from '../common/user.avatar'

import { useAppSelector } from '../../hooks/useRedux'
import { getAuth, getUser } from '../../redux/auth/selectors'
import { palette } from '../../theme/palette'

export const ProfileHeader = memo(() => {

  const { isAuthenticated } = useAppSelector(getAuth)
  const { picture } = useAppSelector(getUser)
  
  const navigation = useNavigation()

  return (
    <View style={{ margin: 10 }}>
      {
        isAuthenticated
        ? <UserAvatar picture={picture} onPress={() => navigation.navigate('RootProfile')} />
        : <Button title='Sign In' onPress={() => navigation.navigate('SignIn')} color={palette.main.lightblue} />
      }
    </View>
  )
})