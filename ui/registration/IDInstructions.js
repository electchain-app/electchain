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

const IDInstructionsScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View style={{marginVertical: 100}}>
              <Text style={[textStyles.details, {fontSize: 27, textAlign: 'center', padding: 30}]}>please have the following item ready:</Text>
              <Text style={[textStyles.header, {fontSize: 27, textAlign: 'center'}]}>a government-issued ID</Text>
              <Text style={[textStyles.details, {fontSize: 22, textAlign: 'center', padding: 30}]}>(driver’s license, state ID, or passport)</Text>
              <TouchableOpacity 
                style={[buttonStyles.red_button, {marginTop: 100}]}
                onPress={() => navigation.navigate('VoterInfo')}>
                <Text style={textStyles.button}>Continue</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export {IDInstructionsScreen};