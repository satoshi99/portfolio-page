import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
  totalObj: number
  numObjInPage: number
  currentPage: number
  onClick: () => void
}

const pageRange = (numPages: number) =>
  Array.from({ length: numPages }, (_, i) => i + 1)

export const Pagination = ({
  totalObj,
  numObjInPage,
  currentPage,
  onClick,
}: Props) => {
  return (
    <Flex direction="row" gap="3">
      {pageRange(Math.ceil(totalObj / numObjInPage)).map((v, i) => (
        <Button
          key={i}
          rounded="full"
          colorScheme={v === currentPage ? 'teal' : 'gray'}
          onClick={v === currentPage ? null : onClick}
        >
          {v}
        </Button>
      ))}
    </Flex>
  )
}
