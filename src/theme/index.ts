import { Theme } from "@react-navigation/native"

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#3d5afe',
    background: '#171717',
    card: '#141414',
    text: '#fff',
    border: '#141414',
    notification: 'blue'
  }
}

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: 'black',
    background: '#fff',
    card: 'blue',
    text: 'black',
    border: 'blue',
    notification: 'blue'
  }
}