import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

// Packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import LearningCenter from './screens/LearningCenter';
import SplashScreen from './screens/SplashScreen';
import Signup from './screens/Signup';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isShow, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return isShow ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Signup">
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
