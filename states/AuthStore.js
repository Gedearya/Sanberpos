import { apiAuth } from '@/utils/apiAuth'
import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  postRegister : ({ ...params }) => apiAuth.postRegister({...params}),
  postLogin : ({ ...params }) => apiAuth.postLogin({...params})
}))