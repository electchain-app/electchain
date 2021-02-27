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
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import {pageStyles, textStyles, buttonStyles} from './styles.js';

// const Welcome: () => React$Node = () => {
const WelcomeScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(true);
  
  return (
      <SafeAreaView style={pageStyles.sectionContainer}>
        {
          <View>
            <Text style={textStyles.centered}>Ready to vote?</Text>
            <TouchableOpacity 
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('IDInstructions')}>
                <Text style={textStyles.button}>Begin</Text>
            </TouchableOpacity>
          </View>
          
        }
      </SafeAreaView>
  );
};



export {WelcomeScreen};

