import React, {useState, useEffect} from 'react';
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
import { CheckBox } from 'react-native-elements';
import MultipleChoice from "react-native-multiple-choice-picker";
import {pageStyles, textStyles, buttonStyles} from '../styles';

const CandidateScreen = ({navigation}) => {
    const [candidate, setCandidate] = useState([]);
    return(
        <SafeAreaView style={pageStyles.sectionContainer}>
            <View>
                <Text>president</Text>
                <Text>of the United States</Text>
                <MultipleChoice
                    direction={'column'}
                    choices={['Joseph R. Biden (D)', 'Donald J. Trump (R)', 'Howie Hawkins (G)', 'Jo Jergensen (L)']}
                    onPress={() => console.log(this.data)}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('ReviewSelection', {candidate: candidate})}
                />
            </View>
        </SafeAreaView>
    )
}

export {CandidateScreen};
