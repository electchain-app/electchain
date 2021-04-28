import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import SyncStorage from 'sync-storage';
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
                <InstructionText
                    header="President"
                    details={SyncStorage.get('presidentChoice')}
                />
                <InstructionText
                    header="Senator"
                    details={SyncStorage.get('senatorChoice')}
                />
                <TouchableOpacity
                    style={buttonStyles.red_button}
                    onPress={() => navigation.navigate('PresidentialCandidates')}>
                    <Text style={textStyles.button}>Make Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={buttonStyles.red_button}
                    onPress={() => {sendToBlockchain(); navigation.navigate('Confirmation');}}>
                    <Text style={textStyles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const sendToBlockchain = () => {
    console.log('Enter sendBlockChain');
    console.log('President Choice: ' + SyncStorage.get('presidentChoice'));
    console.log('Senate Choice: ' + SyncStorage.get('senatorChoice'));
}

export {ReviewSelectionScreen};
