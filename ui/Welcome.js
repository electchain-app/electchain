/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import { NavigationContainer } from '@react-navigation/native';
import {pageStyles, textStyles} from './styles.js';

// const Welcome: () => React$Node = () => {
const WelcomeScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(true);
  
  return (
      <SafeAreaView style={pageStyles.sectionContainer}>
        {
          <View>
            <Text>Ready to vote?</Text>
            <Button 
                title="Begin"
                onPress={() => navigation.navigate('IDInstructions')}    
            />
          </View>
          
        }
      </SafeAreaView>
  );
};



export {WelcomeScreen};

