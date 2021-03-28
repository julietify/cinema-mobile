import { createAsyncThunk } from '@reduxjs/toolkit'
import Auth0 from 'react-native-auth0'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage'

const auth0 = new Auth0({ 
  domain: Config.AUTH0_DOMAIN,
  clientId: Config.CLIENT_ID
})

const accesTokenStorage = 'accessToken'

export const login = createAsyncThunk('auth/login', async () => {
  const token = await AsyncStorage.getItem(accesTokenStorage)
  
  if(!token) throw 'no token'
  
  const { name, picture } = await auth0.auth.userInfo({ token })

  return { name, picture }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem(accesTokenStorage)
  await auth0.webAuth.clearSession()
})

export const signInGoolge = createAsyncThunk('auth/signin/google', async (_, thunk) => {
  const { accessToken } = await auth0.webAuth.authorize({
    scope: Config.auth_scope_google,
    connection: Config.auth_connection_google,
    audience: Config.auth_audience
  })

  await AsyncStorage.setItem(accesTokenStorage, accessToken)

  thunk.dispatch(login())
})