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

const LiveSelfieScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                header="record"
                details="a video of yourself smiling and holding up a peace sign"
              />
              <TouchableOpacity 
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('IdentityApproval')}>
                <Text style={textStyles.button}>Record</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export {LiveSelfieScreen};