import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export const Link = (props: LinkProps) => (
  <ChakraLink _hover={{ textDecoration: 'none' }} {...props} />
)
