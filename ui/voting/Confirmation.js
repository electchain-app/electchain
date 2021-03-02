import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity, Image
} from 'react-native';

import {pageStyles, textStyles, buttonStyles} from '../styles';

const ConfirmationScreen = ({navigation}) => {
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            {
                <View>
                    <View>
                        <Image source={require('../assets/images/welcome-screen.png')}
                               style={{marginTop: -100, width: 400, height: 500}}/>
                    </View>
                    <View style={pageStyles.sectionContainer}>
                        <Text style={[textStyles.header, {textAlign: 'center'}]}>electchain</Text>
                        <Text style={textStyles.centered}>Your ballot has been received!</Text>
                        <TouchableOpacity
                            style={buttonStyles.red_button}
                            onPress={() => navigation.navigate('Welcome')}>
                            <Text style={textStyles.button}>Finish</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}

export {ConfirmationScreen};
