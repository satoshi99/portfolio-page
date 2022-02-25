import { extendTheme, textDecoration } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    darkBlue: '#002D59',
  },
  textStyles: {
    a: {
      textDecoration: 'none',
    },
    u: {
      textDecoration: 'underline',
    },
  },
  fonts,
  breakpoints,
})

export default theme
