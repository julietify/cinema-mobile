import { Theme } from "@react-navigation/native"
import { palette } from './palette'

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: palette.theme.light,
    background: palette.theme.dark,
    card: palette.theme.card,
    text: palette.theme.light,
    border: palette.theme.light,
    notification: 'blue'
  }
}

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: palette.theme.dark,
    background: palette.theme.light,
    card: palette.theme.light,
    text: palette.theme.dark,
    border: palette.theme.dark,
    notification: 'blue'
  }
}