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

const ReviewSelectionScreen = ({navigation}) => {
    // console.log(this.props.navigation.state);
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <View>
                <Text>review</Text>
                <Text>your selection</Text>
                <Text>Joe Biden</Text>
                <Button
                    title="Make Changes"
                    onPress={() => navigation.navigate('Candidates')}
                />
                <Text/>
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate('Confirmation')}
                />
            </View>
        </SafeAreaView>
    )
}

export {ReviewSelectionScreen};
