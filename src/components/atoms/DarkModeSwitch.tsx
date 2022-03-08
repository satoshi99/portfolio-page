import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, Button } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Button
      onClick={toggleColorMode}
      bg="transparent"
      p="0"
      _hover={{ bgColor: 'transparent', color: 'yellow.200' }}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
