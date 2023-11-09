import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreatePost from '../screens/CreatePost';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreatePost"
        component={CreatePost}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
