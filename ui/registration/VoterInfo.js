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
import CheckBox from '@react-native-community/checkbox';

const VOTER_INFO = {
    "firstName": "",
    "lastName": "", 
    "birthday": "",
    "zipcode": "", 
    "tdlNum": "",
    "vuidNum": "",
};

const Field = (props) => {

    const [input, setInput] = useState('');

    return (
        <View>
            <TextInput style={textStyles.fieldInput} placeholder={props.placeholder}
                onChangeText={input => {
                    setInput(input);
                    VOTER_INFO[props.name] = input;
                    }}/>
            <Text style={textStyles.fieldLabel}>{props.field}</Text>
            <Text>{input}</Text>
        </View>
    )
}

const VoterInfoScreen = ({navigation}) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    var certify = false;

    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <ScrollView>
                <View style={{marginBottom: 50}}>
                    <InstructionText header="enter"
                        details="the following information" />

                    {/* Voter Information fields */}    
                    <Field name="firstName" 
                        style={textStyles.field} 
                        placeholder="Tej" 
                        field="First Name"/>
                    <Field name="lastName"
                        style={textStyles.field} 
                        placeholder="Anand" 
                        field="Last Name"/>
                    <Field name="birthday" 
                        style={textStyles.field} 
                            placeholder="1/1/2021" 
                            field="Birthday"/>
                    <Field name="zipcode" 
                        style={textStyles.field} 
                        placeholder="12345" 
                        field="Zipcode"/>
                    <Text style={[textStyles.details, {fontSize: 16, marginVertical: 30}]}>and if you have the following:</Text>
                    <Field name="tdlNum" 
                        style={textStyles.field} 
                        placeholder="1234567890ABCDE" 
                        field="Driver's License #"/>
                    <Field name="vuidNum" 
                        style={textStyles.field} 
                        placeholder="1234567890ABCDE" 
                        field="Texas Voter ID #"/>

                    <View style={{flexDirection: 'row'}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(value) => setToggleCheckBox(certify)}
                    />
                    <Text style={textStyles.checkbox}>I ceritfy all of this information is not falsified</Text>
                    </View>

                    <TouchableOpacity 
                        style={buttonStyles.red_button}
                        onPress={() => navigation.navigate('RegisteredVoterApproval',
                        {
                            firstName: VOTER_INFO["firstName"],
                            lastName: VOTER_INFO["lastName"],
                            birthday: VOTER_INFO["birthday"],
                            zipcode: VOTER_INFO["zipcode"],
                            tdlNum: VOTER_INFO["tdlNum"],
                            vuidNum: VOTER_INFO["vuidNum"],
                            
                        })
                        }>
                        <Text style={textStyles.button}>Continue</Text>
                    </TouchableOpacity>

                </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export {VoterInfoScreen};