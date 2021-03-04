import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {pageStyles, textStyles, buttonStyles} from '../styles';
import {InstructionText} from "../App";

const VoteInstructionScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <View>
                <InstructionText
                    header="vote"
                    details="for the following candidates"
                />
                <TouchableOpacity
                    style={buttonStyles.red_button}
                    onPress={() => navigation.navigate('PresidentialCandidates')}>
                    <Text style={textStyles.button}>Start</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {VoteInstructionScreen};
