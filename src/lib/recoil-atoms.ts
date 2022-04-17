import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { UpdatePostInputs } from '../types/post'

const { persistAtom } = recoilPersist()

export const csrfState = atom<boolean>({
  key: 'csrfState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const updatePostState = atom<UpdatePostInputs>({
  key: 'updatePost',
  default: {
    data: {
      id: '',
      thumbnail: '',
      title: '',
      description: '',
      content: '',
      url_slug: '',
      is_public: false,
    },
    tags: [],
  },
  effects_UNSTABLE: [persistAtom],
})
