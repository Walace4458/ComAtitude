import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import NameScreen from './screens/NameScreen';
import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import VideoScreen from './screens/VideoScreen';
import QuestionScreen from './screens/QuestionScreen';
import VideoViewScreen from './screens/VideoViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
    name="Welcome" 
    component={WelcomeScreen} 
    options={{ headerShown: false }}  // 👈 Isso remove a barra superior
  />
        <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Question" component={QuestionScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Videos" component={VideoScreen} options={{ headerShown: false}} />
        <Stack.Screen name='VideoView' component={VideoViewScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}