  import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Profile } from '../../screens/profile/Profile'

type ProfileStackParams = {
  ProfileRoot: undefined
}

const ProfileStack = createStackNavigator<ProfileStackParams>()

export const ProfileStackScreen = () => (
  <ProfileStack.Navigator initialRouteName='ProfileRoot'>
    <ProfileStack.Screen name="ProfileRoot" component={Profile} />
  </ProfileStack.Navigator>
)