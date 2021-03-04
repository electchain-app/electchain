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
import SyncStorage from 'sync-storage';
import {InstructionText} from '.././App.js'
import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import CheckBox from '@react-native-community/checkbox';


const Field = (props) => {

    const [input, setInput] = useState('');

    return (
        <View>
            <TextInput style={textStyles.fieldInput} placeholder={props.placeholder}
                onChangeText={input => {
                    setInput(input);
                    setFieldInput(props.name, input);
                    }}/>
            <Text style={textStyles.fieldLabel}>{props.field}</Text>
            <Text>{input}</Text>
        </View>
    )
}

const setFieldInput = (field, value) => {
    SyncStorage.set(field, value)
    .then(() => {
        const response = SyncStorage.get(field); // 'bar'
        // console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
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
                    <Field name="county" 
                        style={textStyles.field} 
                        placeholder="Travis" 
                        field="County"/>
                    <Text style={[textStyles.details, {fontSize: 16, marginVertical: 30}]}>and if you have the following:</Text>
                    <Field name="dlNum" 
                        style={textStyles.field} 
                        placeholder="1234567890ABCDE" 
                        field="Driver's License #"/>

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
                        onPress={() => navigation.navigate('PrintVoterInfo')}>
                        <Text style={textStyles.button}>Continue</Text>
                    </TouchableOpacity>


                </View>
          </ScrollView>
        </SafeAreaView>
    )
}

const PrintVoterInfoScreen = ({navigation}) => {

    return(
        <View>
            <Text>{SyncStorage.get('firstName')}</Text>
            <Text>{SyncStorage.get('lastName')}</Text>
            <Text>{SyncStorage.get('birthday')}</Text>
            <Text>{SyncStorage.get('county')}</Text>
            <Text>{SyncStorage.get('dlNum')}</Text>
        </View>

    );
}

export {VoterInfoScreen, PrintVoterInfoScreen};