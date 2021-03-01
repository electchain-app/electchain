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
import {ApprovedScreen} from './RegisteredVoterApproval'

const IdentityApprovalScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <ApprovedScreen header="identities" details="match"/>
              <TouchableOpacity 
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('ApprovedRegistration')}>
                <Text style={textStyles.button}>Continue</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export {IdentityApprovalScreen};