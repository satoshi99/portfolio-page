import { Link, LinkProps } from '@chakra-ui/react'

export const ChakraLink = (props: LinkProps) => (
  <Link _hover={{ textDecoration: 'none' }} {...props} />
)
