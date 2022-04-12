import { Text, View, StyleSheet, Image } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/Main';
import Parte2 from '../screens/Parte2';
import Parte3 from '../screens/Parte3';
const Screens=()=>{
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Pantalla Principal'
        component={Main} 
        />   
        <Stack.Screen 
        name='Escolaridad'
        component={Parte2} 
        />  
        <Stack.Screen 
        name='Empleo actual y anteriores'
        component={Parte3} 
        />   
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Screens;