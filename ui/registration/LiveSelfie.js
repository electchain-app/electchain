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

const LiveSelfieScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                header="record"
                details="a video of yourself smiling and holding up a peace sign"
              />
              <Button
                title="Record"
                onPress={() => navigation.navigate('IdentityApproval')}    
              />
          </View>
        </SafeAreaView>
    )
}

export {LiveSelfieScreen};