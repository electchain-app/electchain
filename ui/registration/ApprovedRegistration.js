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
  TouchableOpacity
} from 'react-native';

import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import {InstructionText} from './../App.js';

const ApprovedRegistrationScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                style={{alignItems: 'center'}}
                header="congrats"
                details="you're ready to vote!"
              />
              <TouchableOpacity 
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('VoteInstruction')}>
                <Text style={textStyles.button}>Finish</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export {ApprovedRegistrationScreen};