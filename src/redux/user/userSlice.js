import {createSlice} from '@reduxjs/toolkit';
import {usersData} from '../../utils/constants';

const initialState = {
  userList: usersData,
  postList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, {payload}) => {
      state.userList = payload;
    },
    toggleFollow: (state, {payload: userId}) => {
      const user = state.userList.find(item => item.Id === userId);
      if (user) {
        user.isFollowing = !user.isFollowing;
      }
    },
    addNewPost: (state, {payload}) => {
      state.postList.push(payload);
    },
    toggleLikeFlow: (state, {payload: postId}) => {
      const post = state.postList.find(item => item.id === postId);
      if (post) {
        post.isLiked = !post.isLiked;
      }
    },
  },
});

export const {updateUser, toggleFollow, addNewPost, toggleLikeFlow} =
  userSlice.actions;

export default userSlice.reducer;
