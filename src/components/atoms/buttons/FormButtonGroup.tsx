import { Button, ButtonGroup } from '@chakra-ui/react'

type Props = {
  submitTitle: string
  cancelTitle: string
  onClickCancel: () => void
  isValid: boolean
  isSubmitting: boolean
}

export const FormButtonGroup = ({
  submitTitle,
  cancelTitle,
  onClickCancel,
  isValid,
  isSubmitting,
}: Props) => {
  return (
    <ButtonGroup>
      <Button
        type="submit"
        variant="solid"
        colorScheme="blue"
        disabled={!isValid}
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
