import { Button, ButtonGroup } from '@chakra-ui/react'

type Props = {
  submitTitle: string
  cancelTitle: string
  onClickCancel: () => void
  isSubmitting: boolean
}

export const FormButtonGroup = ({
  submitTitle,
  cancelTitle,
  onClickCancel,
  isSubmitting,
}: Props) => {
  return (
    <ButtonGroup>
      <Button
        type="submit"
        variant="solid"
        colorScheme="blue"
        isLoading={isSubmitting}
      >
        {submitTitle}
      </Button>
      <Button
        type="button"
        variant="solid"
        colorScheme="gray"
        onClick={onClickCancel}
      >
        {cancelTitle}
      </Button>
    </ButtonGroup>
  )
}
