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

import {pageStyles} from '.././styles.js';

const IDInstructionsScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <Text>please have the following item ready:</Text>
              <Text>a government-issued ID</Text>
              <Text>(driver’s license, state ID, or passport)</Text>
              <Button
                title="Ready"
                onPress={() => navigation.navigate('IDInstructions')}    
              />
          </View>
        </SafeAreaView>
    )
}

export {IDInstructionsScreen};