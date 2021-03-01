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

const ScanIDScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                header="scan"
                details="your driver's license"
              />
              <TouchableOpacity 
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('LiveSelfie')}>
                <Text style={textStyles.button}>Scan</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export {ScanIDScreen};