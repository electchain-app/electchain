import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {WelcomeScreen} from './Welcome';
import {IDInstructionsScreen} from './register/IDInstructions';

const App: () => React$Node = () => {
  
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(true);
  const Stack = createStackNavigator();
  
  return (

  // Define all of the screens 
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="IDInstructions" component={IDInstructionsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;

