import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../src/screens/SignUp/SignUp';
import Login from '../src/screens/Login/Login';
import SignUp from '../src/screens/SignUp/SignUp';
import Complete from '../src/screens/Complete/Complete';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Signup' component={Complete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
