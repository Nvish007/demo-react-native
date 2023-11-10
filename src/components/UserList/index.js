import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../utils/constants';

const UserList = ({userList, handleChaneFollowingStatus}) => {
  return (
    <View style={[styles.container]}>
      <ScrollView>
        {userList?.length > 0 &&
          userList.map((item, key) => {
            const buttonBackgroundColor = item.isFollowing
              ? colors.black
              : colors.blue;
            return (
              <View key={item.Id} style={styles.listView}>
                <Text style={styles.userText}> {item.Name}</Text>
                <TouchableOpacity
                  onPress={() => handleChaneFollowingStatus(item.Id)}
                  style={[
                    styles.btnContainer,
                    {backgroundColor: buttonBackgroundColor},
                  ]}>
                  <Text style={styles.btnTextStyle}>
                    {item.isFollowing ? 'Unfollow' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default UserList;
