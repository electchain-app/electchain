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

const ConfirmationScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <View>
                <Text>electchain</Text>
                <Text>Your ballot has</Text>
                <Text>been received!</Text>
                <Button
                    title="Finish"
                    onPress={() => navigation.navigate('Welcome')}
                />
            </View>
        </SafeAreaView>
    )
}

export {ConfirmationScreen};
