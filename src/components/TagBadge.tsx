import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from './Link'
import { Tag } from '../types/types'

type Props = {
  tag: string
}

export const TagBadge = ({ tag }: Props) => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Button colorScheme="blue" size="xs">
          {tag}
        </Button>
      </Link>
    </NextLink>
  )
}
