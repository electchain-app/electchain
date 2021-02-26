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

const ScanIDScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                header="scan"
                details="your driver's license"
              />
              <Button
                title="Scan"
                onPress={() => navigation.navigate('LiveSelfie')}    
              />
          </View>
        </SafeAreaView>
    )
}

export {ScanIDScreen};