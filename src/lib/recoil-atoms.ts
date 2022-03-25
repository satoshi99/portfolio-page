import { atom, selector } from 'recoil'

export const csrfState = atom<boolean>({
  key: 'csrfState',
  default: false,
})
