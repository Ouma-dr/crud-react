import { createSlice } from "@reduxjs/toolkit";


export const postSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload)
    },
    deletePost: (state, action)=> {
      state.items = state.items.filter((post) => post.id !== action.payload.id)
    },
    updatePost: (state, action)=> {
      state.items.map(post => {
        if(post.id === action.payload.id){
           post.title = action.payload.title;
           post.desc = action.payload.desc;

        }
      })
    },
  },

})

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;