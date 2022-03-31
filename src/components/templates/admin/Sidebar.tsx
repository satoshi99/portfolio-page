import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  DrawerOverlay,
} from '@chakra-ui/react'
import { FiHome, FiPenTool, FiSettings, FiMenu } from 'react-icons/fi'
import { LinkItem } from '../../../types/admin'
import { ChakraLink } from '../../atoms/ChakraLink'

const linkItems: LinkItem[] = [
  { name: 'Home', url: 'dashboard', icon: FiHome },
  { name: 'New post', url: 'new-post', icon: FiPenTool },
  { name: 'Setting', url: 'setting', icon: FiSettings },
]

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        linkItems={linkItems}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent onClose={onClose} linkItems={linkItems} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
  linkItems: LinkItem[]
}

const SidebarContent = ({ onClose, linkItems, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('teal', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('teal', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      pt="10"
      {...rest}
    >
      {linkItems?.map((link) => (
        <NavItem key={link.name} linkItem={link} />
      ))}
      <MainBanar />
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  linkItem: LinkItem
}

const NavItem = ({ linkItem, ...rest }: NavItemProps) => {
  return (
    <Link
      href={`/admin/${linkItem.url}`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontSize="20"
        color="white"
        _hover={{
          bg: 'blackAlpha.300',
        }}
        {...rest}
      >
        {linkItem.icon && <Icon mr="4" as={linkItem.icon} />}
        {linkItem.name}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('teal', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('teal', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="ghost"
        color="white"
        size="lg"
        onClick={onOpen}
        aria-label="open menu"
        _hover={{ bgColor: 'blackAlpha.500' }}
        icon={<FiMenu />}
      />

      <Text
        fontSize="3xl"
        ml="8"
        fontFamily="monospace"
        fontWeight="bold"
        bgGradient="linear(to-r, yellow.100, yellow.200, yellow.400)"
        bgClip="text"
      >
        Mypage
      </Text>
      <MainBanar />
    </Flex>
  )
}

const MainBanar = () => {
  return (
    <ChakraLink href="/" isExternal>
      <Text fontWeight="bold" align="center" bg="white" p="5" shadow="2xl">
        Satoshi Tech Portfolio
      </Text>
    </ChakraLink>
  )
}
