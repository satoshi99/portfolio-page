// Table of contents component

import { ListItem, OrderedList } from '@chakra-ui/react'

export const TOC = () => {
  return (
    <OrderedList p="10" position="sticky" top="10" zIndex="dropdown">
      <ListItem>content A</ListItem>
      <ListItem>content B</ListItem>
      <ListItem>content C</ListItem>
      <ListItem>content D</ListItem>
    </OrderedList>
  )
}
