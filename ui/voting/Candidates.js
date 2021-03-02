import React, {useState, useEffect, Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import SyncStorage from 'sync-storage';
import {selectPageStyles, textStyles, buttonStyles} from '../styles';
import {SelectInstructionText} from '../App';

export default class CandidateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presidentialCandidates: [
                {name: 'Biden'},
                {name: 'Trump'},
                {name: 'Tej Anand'}
            ]
        };
    }

    componentDidMount() {
        let choices = this.state.presidentialCandidates.map((item, index) => {
            item.isSelected = false
            return {...item};
        });
        this.setState({presidentialData : choices});
        console.log('Choices: ', choices);
    }

    selectionHandler = (idx) => {
        let selected = false;
        const {presidentialCandidates} = this.state;
        let choices = presidentialCandidates.map((item, index) => {
            if (idx === index) {
                item.isSelected = !item.isSelected;
                selected = item.isSelected;
            }
            return {...item};
        });
        console.log('Candidate State: ', choices);
        if (selected) {
            for (let i = 0; i < choices.length; i++) {
                if (i !== idx) {
                    choices[i]['isSelected'] = false;
                }
                else {
                    SyncStorage.set('presidentChoice', choices[i]['name']);
                }
            }
        }
        this.setState({presidentialCandidates: choices});
    }

    render() {
        const {presidentialCandidates} = this.state;
        return(
            <>
                <SafeAreaView style={selectPageStyles.sectionContainer}>
                    <View>
                        <SelectInstructionText
                            header="president"
                            details="of the United States"
                        />
                        {
                            presidentialCandidates.map((item, index) => {
                                return (
                                    // TODO: improve CSS
                                    <TouchableOpacity
                                        onPress={() => this.selectionHandler(index)}
                                        style={{
                                            marginTop: 20,
                                            height: 50,
                                            width: '80%',
                                            borderRadius: 42,
                                            backgroundColor: 'green',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            paddingHorizontal: 25,
                                            alignItems: 'center'
                                        }}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.isSelected ? 'selected': 'not selected'}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                        <TouchableOpacity
                            style={buttonStyles.blue_button}
                            onPress={() => this.props.navigation.navigate('ReviewSelection')}>
                            <Text style={textStyles.button}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={selectPageStyles.body}/>
            </>
        );
    }
}
