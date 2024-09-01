import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
  id: number;
  text: string;
  author: string;
  date?: string; // Optional date for additional details
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    updateComment: (state, action: PayloadAction<Comment>) => {
      const index = state.comments.findIndex(comment => comment.id === action.payload.id);
      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
  },
});

export const { addComment, removeComment, updateComment } = commentsSlice.actions;

export default commentsSlice.reducer;
