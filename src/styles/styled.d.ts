import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
      error: string
      paper: string
      text1: string
      white: string
    }
  }
}