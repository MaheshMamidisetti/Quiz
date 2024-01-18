import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default MyStack; 