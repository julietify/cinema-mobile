interface UserState {
  name: string
  picture: string
}

interface AuthState {
  isAuthenticated: Boolean
  isGuest: boolean
  checking: Boolean
  user: UserState
}

export const initialState: AuthState = {
  isAuthenticated: false,
  isGuest: false,
  checking: true,
  user: {
    name: '',
    picture: ''
  }
}
