import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { CheckBox } from 'react-native-elements';
// import MultipleChoice from "react-native-multiple-choice-picker";
import {selectPageStyles, textStyles, buttonStyles} from '../styles';
import {SelectInstructionText} from '../App';

const CandidateScreen = ({navigation}) => {
    return(
        <>
        <SafeAreaView style={selectPageStyles.sectionContainer}>
            <View>
                <SelectInstructionText
                    header="president"
                    details="of the United States"
                />
                {/*<MultipleChoice*/}
                {/*    direction={'column'}*/}
                {/*    choices={['Joseph R. Biden (D)', 'Donald J. Trump (R)', 'Howie Hawkins (G)', 'Jo Jergensen (L)']}*/}
                {/*    // onPress={() => console.log(this.data)}*/}
                {/*/>*/}
                <TouchableOpacity
                    style={buttonStyles.blue_button}
                    onPress={() => navigation.navigate('ReviewSelection')}>
                    <Text style={textStyles.button}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <SafeAreaView style={selectPageStyles.body}/>
        </>
    )
}

export {CandidateScreen};
