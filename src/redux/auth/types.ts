interface UserState {
  name: string
  picture: string
  email: string
}

interface AuthState {
  isAuthenticated: Boolean
  checking: Boolean
  user: UserState
}

export const initialState: AuthState = {
  isAuthenticated: false,
  checking: true,
  user: {
    name: '',
    picture: '',
    email: ''
  }
}
