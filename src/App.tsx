import React from 'react'
import { Provider } from 'react-redux'
import { useColorScheme, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { RootStackScreen } from './navigation/root'
import store from './redux/store'
import { darkTheme, lightTheme } from './theme'

export const App = () => {

  const scheme = useColorScheme()

  return (
    <>
    <StatusBar translucent backgroundColor="transparent" />
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Provider store={store}>
        <RootStackScreen />
      </Provider>
    </NavigationContainer>
    </>
  )
}