import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  email: string
}

const initialState: User[] = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.push(action.payload)
    },
    removeUser(state, action: PayloadAction<number>) {
      return state.filter(user => user.id !== action.payload)
    },
    // other reducers...
  }
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
