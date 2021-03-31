import React from 'react'
import { ProfileHeader } from '../../components/header/profile.header'

export const rootHeaderConfig = {
  headerTitle: () => null,
  headerRight: () => <ProfileHeader />
}

export const authHeaderConfig = {
  headerShown: false
}