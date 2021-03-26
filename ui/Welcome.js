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
  Image
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
      <SafeAreaView >
        {
          <View>
            <View>
              <Image source={require('./assets/images/welcome-screen.png')} style={{marginTop: -100, width: 400, height: 500}}/>
            </View>
            <View style={pageStyles.sectionContainer}>
              <Text style={[textStyles.header, {textAlign:'center'}]}>elect</Text>
              <Text style={[textStyles.details, {textAlign:'center', fontSize: 35}]}>chain</Text>
              <Text style={textStyles.centered}>Ready to vote?</Text>
              <TouchableOpacity
                  style={buttonStyles.red_button}
                  onPress={() => navigation.navigate('IDInstructions')}>
                  <Text style={textStyles.button}>Begin</Text>
              </TouchableOpacity>

              {/* TODO: temp for skipping registration screens */}
              <TouchableOpacity
                  style={buttonStyles.red_button}
                  onPress={() => navigation.navigate('VoteInstruction')}>
                <Text style={textStyles.button}>Skip to Vote Screens</Text>
              </TouchableOpacity>
            </View>
          </View>

        }
      </SafeAreaView>
  );
};



export {WelcomeScreen};

