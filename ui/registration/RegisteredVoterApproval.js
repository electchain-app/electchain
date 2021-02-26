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


/* Screen for if they are a verified registered voter */
const ApprovedScreen = (props) => {
    return (
        <View>
            <InstructionText header={props.header}
                    details={props.details} />
            <Text>CHECKMARK HERE</Text>
        </View>
    );
}

/* Screen for if they are NOT a registered voter */
const NotApprovedScreen = (props) => {
    return (
        <View>
            <InstructionText header={props.header}
                    details={props.details} />
            <Text>CHECKMARK HERE</Text>
        </View>
    );
}


const RegisteredVoterApprovalScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>
              <ApprovedScreen header="registered" details="voter"/>
              <Button
                title="Continue"
                onPress={() => navigation.navigate('ScanID')}
              />
              {/*TODO: Temp button for segueing to Voting screens */}
              <Text/>
              <Button
                  title="Vote"
                  onPress={() => navigation.navigate('VoteInstruction')}
              />
          </View>
        </SafeAreaView>
    )
}

export {RegisteredVoterApprovalScreen, ApprovedScreen};
