import { createSlice } from "@reduxjs/toolkit";
import { PostInterface } from "../../types/posts/posts.types";
import { RootState } from "../../app/store";

const initialState : PostInterface[]= [
    {id: 1, title: "Teny ratsy", content: "Tatasika ny bandy"},
    {id: 2, title: "vavaka", content: "Tatasika ny sipa"}
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },

        // deletePost(state, action) {

        // }
    }
});

export const selectAllPosts = (state : RootState) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
