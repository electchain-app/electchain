import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {buttonStyles, pageStyles, textStyles} from '../styles';
import {InstructionText} from '../App';

const ReviewSelectionScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <View>
                <InstructionText
                    header="review"
                    details="review your selection"
                />
                <TouchableOpacity
                    style={buttonStyles.red_button}
                    onPress={() => navigation.navigate('Candidates')}>
                    <Text style={textStyles.button}>Make Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={buttonStyles.red_button}
                    onPress={() => navigation.navigate('Confirmation')}>
                    <Text style={textStyles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {ReviewSelectionScreen};
