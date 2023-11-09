import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import UserList from '../../components/UserList';
import PostFeed from '../../components/PostFeed';
import {toggleFollow, toggleLikeFlow} from '../../redux/user/userSlice';
import {styles} from './styles';

const HomeScreen = () => {
  const {userList, postList} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [isUserTabVisible, setIsUserTabVisible] = useState(true);
  const [isPostTabVisible, setIsPostTabVisible] = useState(false);

  useEffect(() => {
    setIsUserTabVisible(true);
    setIsPostTabVisible(false);
  }, [isFocused]);

  const handleTabChanges = key => {
    if (key === 'users') {
      setIsPostTabVisible(false);
      setIsUserTabVisible(true);
      return;
    }
    if (key === 'posts') {
      setIsUserTabVisible(false);
      setIsPostTabVisible(true);
      return;
    }
    setIsUserTabVisible(true);
  };

  const handleChangeFollowingStatus = id => {
    dispatch(toggleFollow(id));
  };

  const handleLikeFlow = id => {
    dispatch(toggleLikeFlow(id));
  };

  const usersTabBackgroundColor = isUserTabVisible ? '#8f8f8f' : '#fff';
  const postTabBackgroundColor = isPostTabVisible ? '#8f8f8f' : '#fff';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => handleTabChanges('users')}
            style={[
              styles.tabButtonStyle,
              {backgroundColor: usersTabBackgroundColor},
            ]}>
            <Text style={styles.tabButtonTextStyle}>Users</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabChanges('posts')}
            style={[
              styles.tabButtonStyle2,
              {backgroundColor: postTabBackgroundColor},
            ]}>
            <Text style={styles.tabButtonTextStyle}>Posts</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isUserTabVisible ? (
        <UserList
          userList={userList}
          handleChaneFollowingStatus={handleChangeFollowingStatus}
        />
      ) : isPostTabVisible ? (
        <>
          <PostFeed postList={postList} handleLikeFlow={handleLikeFlow} />
          <TouchableOpacity
            onPress={() => navigation.navigate('CreatePost')}
            style={styles.floatingButtonStyle}>
            <Text style={styles.btnTextStyle}>+</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </>
  );
};

export default HomeScreen;
