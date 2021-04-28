import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';

import {pageStyles, textStyles, buttonStyles, shapes} from '.././styles.js';
import {InstructionText, CenteredInstructionText} from './../App.js';


const RegisteredVoterApprovalScreen = ({navigation, route}) => {

    const {
        firstName,
        lastName,
        birthday,
        zipcode,
        tdlNum,
        vuidNum,
        certify,
    } = route.params;

    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
          <View>

            {/* <Text>{firstName}</Text>
            <Text>{lastName}</Text>
            <Text>{birthday}</Text>
            <Text>{zipcode}</Text>
            <Text>{tdlNum}</Text>
            <Text>{vuidNum}</Text> */}

            {certify && (
            <>
            <ApprovedScreen header="registered" details="voter"/>
            <TouchableOpacity
                style={buttonStyles.red_button}
                onPress={() => navigation.navigate('ScanID')}>
                <Text style={textStyles.button}>Continue</Text>
            </TouchableOpacity>
            </>
            )}
            
            
            {!certify && (
            <>
            <NotApprovedScreen error="we can't find you!" question="registered to vote?"/>
            <TouchableOpacity 
                style={[buttonStyles.red_button, {marginTop: 100}]}
                onPress={() => navigation.navigate('VoterInfo')}>
                <Text style={{paddingHorizontal: 40, paddingVertical: 10, color: 'white'}}>Re-check</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[buttonStyles.red_button, {marginTop: 20}]}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={{paddingHorizontal: 40, paddingVertical: 10, color: 'white'}}>Exit</Text>
            </TouchableOpacity>
            </>
            )}

          </View>
        </SafeAreaView>
    )
}

/* Screen for if they are a verified registered voter */
const ApprovedScreen = (props) => {
    return (
        <View>
            <CenteredInstructionText header={props.header} details={props.details}/>
            {/* <View style={shapes.CircleShape}></View> */}
            <Icon
                name='checkmark-circle-outline'
                type='ionicon'
                color='#0064FF'
                size={300}
            />
        </View>
    );
}

/* Screen for if they are NOT a registered voter */
const NotApprovedScreen = (props) => {
    return (
        <View style={{marginVertical: 100}}>
            <Text style={[textStyles.header, {fontSize: 27, textAlign: 'center'}]}>oh no!</Text>
            <Text style={[textStyles.header, {fontSize: 27, textAlign: 'center'}]}>{props.error}</Text>
            <Text style={[textStyles.details, {fontSize: 22, textAlign: 'center', marginTop: '10%',}]}>are you sure you're</Text>
            <Text style={[textStyles.header, {fontSize: 22, textAlign: 'center'}]}>{props.question}</Text>
        </View>
    );
}


export {RegisteredVoterApprovalScreen, ApprovedScreen, NotApprovedScreen};
