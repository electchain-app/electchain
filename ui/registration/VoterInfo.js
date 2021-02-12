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
  Button
} from 'react-native';

import {InstructionText} from './../App.js'
import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import {Checkbox} from 'react-native-elements'


const Field = (props) => {
    return (
        <View>
            <TextInput style={{borderBottomWidth: 1.0}} placeholder={props.placeholder}/>
            <Text>{props.field}</Text>
        </View>
    )
}

const VoterInfoScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <ScrollView>
                <View>
                    <InstructionText header="enter"
                        details="the following information" />
                    <Field placeholder="Tej" field="First Name"/>
                    <Field placeholder="Anand" field="Last Name"/>
                    <Field placeholder="1/1/2021" field="Birthday"/>
                    <Field placeholder="Travis" field="County"/>
                    <Text>and if you have the following:</Text>
                    <Field placeholder="1234567890ABCDE" field="Driver's License #"/>
                    <Text>CHECKBOX HERE I ceritfy all of this information is not falsified</Text>
                    <Button
                        title="Continue"
                        onPress={() => navigation.navigate('RegisteredVoterApproval')}    
                    />
                </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export {VoterInfoScreen};