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
import {ApprovedScreen, NotApprovedScreen} from './RegisteredVoterApproval'

const IdentityApprovalScreen = ({navigation}) => {
    return(
       <SafeAreaView style={pageStyles.sectionContainer}>
          <View>

            {/* {certify && (
            <> */}
            <ApprovedScreen header="identites" details="match"/>
            <TouchableOpacity
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('ApprovedRegistration')}>
                <Text style={textStyles.button}>Continue</Text>
            </TouchableOpacity>
            {/* </>
            )} */}
            
            
            {/* {!certify && (
            <> */}
            {/* <NotApprovedScreen error="it's not a match!" question="in good lighting?"/>
            <TouchableOpacity 
                style={[buttonStyles.red_button, {marginTop: 100}]}
                onPress={() => navigation.navigate('ScanID')}>
                <Text style={{paddingHorizontal: 40, paddingVertical: 10, color: 'white'}}>Re-take</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[buttonStyles.red_button, {marginTop: 20}]}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={{paddingHorizontal: 40, paddingVertical: 10, color: 'white'}}>Exit</Text>
            </TouchableOpacity> */}
            {/* </>
            )} */}

          </View>
        </SafeAreaView>
    )
}

export {IdentityApprovalScreen};