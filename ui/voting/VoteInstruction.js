import React, {useState} from 'react';
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

import {pageStyles, textStyles, buttonStyles} from '../styles';

const VoteInstructionScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <View>
                <Text>vote</Text>
                <Text>for the following</Text>
                <Text>candidates</Text>
                <Button
                    title="Start"
                    onPress={() => navigation.navigate('Candidates')}
                />
            </View>
        </SafeAreaView>
    )
}

export {VoteInstructionScreen};
