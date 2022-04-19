import { Button, InputRightElement } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export const ShowPasswordButton = ({ show, setShow }: Props) => {
  const handleClick = () => setShow(!show)

  return (
    <InputRightElement width="4.5rem">
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  )
}
