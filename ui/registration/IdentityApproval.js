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

const IdentityApprovalScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <InstructionText
                header="identities"
                details="match"
              />
              <Button
                title="Ready"
                onPress={() => navigation.navigate('ApprovedRegistration')}    
              />
          </View>
        </SafeAreaView>
    )
}

export {IdentityApprovalScreen};