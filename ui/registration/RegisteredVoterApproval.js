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


/* Screen for if they are a verified registered voter */
const ApprovedScreen = (props) => {
    return (
        <View>
            <CenteredInstructionText header={props.header} details={props.details}/>
            <View style={shapes.CircleShape}></View>
            {/* <Icon
                name='checkmark-circle-outline'
                type='ionicon'
                color='#0064FF'
                iconSize='50'
            /> */}
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
                <TouchableOpacity
                    style={buttonStyles.red_button}
                    onPress={() => navigation.navigate('ScanID')}>
                    <Text style={textStyles.button}>Continue</Text>
                </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export {RegisteredVoterApprovalScreen, ApprovedScreen, NotApprovedScreen};
