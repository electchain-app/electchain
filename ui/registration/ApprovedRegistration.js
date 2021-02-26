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

import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import {InstructionText} from './../App.js';

const ApprovedRegistrationScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                header="congrats"
                details="you're ready to vote!"
              />
              <Button
                title="Finish"
                onPress={() => navigation.navigate('VoteInstruction')}    
              />
          </View>
        </SafeAreaView>
    )
}

export {ApprovedRegistrationScreen};