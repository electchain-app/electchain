import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

import {InstructionText} from '.././App.js'
import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import {Checkbox} from 'react-native-elements'


const Field = (props) => {
    return (
        <View>
            <TextInput style={textStyles.fieldInput} placeholder={props.placeholder}/>
            <Text style={textStyles.fieldLabel}>{props.field}</Text>
        </View>
    )
}

const VoterInfoScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <ScrollView>
                <View style={{marginBottom: 50}}>
                    <InstructionText header="enter"
                        details="the following information" />
                    <Field name="firstName" placeholder="Tej" field="First Name"/>
                    <Field name="lastName" placeholder="Anand" field="Last Name"/>
                    <Field name="birthday" placeholder="1/1/2021" field="Birthday"/>
                    <Field name="county" placeholder="Travis" field="County"/>
                    <Text style={[textStyles.details, {fontSize: 16, marginVertical: 30}]}>and if you have the following:</Text>
                    <Field name="dlNum" placeholder="1234567890ABCDE" field="Driver's License #"/>
                    <Text style={textStyles.checkbox}>CHECKBOX HERE I ceritfy all of this information is not falsified</Text>
                    <TouchableOpacity 
                        style={buttonStyles.red_button}
                        onPress={() => navigation.navigate('RegisteredVoterApproval')}>
                        <Text style={textStyles.button}>Continue</Text>
                    </TouchableOpacity>
                </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export {VoterInfoScreen};