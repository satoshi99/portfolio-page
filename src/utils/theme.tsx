import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const theme = extendTheme({
  colors: {
    black: '#16161D',
    darkBlue: '#002D59',
  },
  fonts,
})

export default theme
