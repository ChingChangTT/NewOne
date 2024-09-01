import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Post {
  id: number
  title: string
}

const initialState: Post[] = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.push(action.payload)
    },
    // other reducers...
  }
})

export const { addPost } = postsSlice.actions
export default postsSlice.reducer
