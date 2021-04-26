import React, {useState, useEffect, Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import SyncStorage from 'sync-storage';
import {selectPageStyles, textStyles, selectTextStyles, buttonStyles} from '../styles';
import {SelectInstructionText} from '../App';

export default class PresidentialCandidateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presidentialCandidates: [
                {name: 'Joe Biden (D)'},
                {name: 'Donald Trump (R)'},
                {name: 'Howie Hawkins (G)'},
                {name: 'Jo Jorgensen (L)'}
            ],
            candidateSelected: false
        };
    }

    componentDidMount() {
        let choices = this.state.presidentialCandidates.map((item, index) => {
            item.isSelected = false
            return {...item};
        });
        this.setState({presidentialCandidates : choices});
        console.log('Choices: ', choices);
    }

    selectionHandler = (idx) => {
        const {presidentialCandidates, candidateSelected} = this.state;
        let choices = presidentialCandidates.map((item, index) => {
            if (idx === index) {
                item.isSelected = !item.isSelected;
                this.setState({candidateSelected: item.isSelected})
                SyncStorage.set('presidentChoice', item.name);
            }
            return {...item};
        });
        console.log('Candidate State: ', choices);
        if (candidateSelected) {
            for (let i = 0; i < choices.length; i++) {
                if (i !== idx) {
                    choices[i]['isSelected'] = false;
                }
            }
        }
        this.setState({presidentialCandidates: choices});
    }

    render() {
        const {presidentialCandidates, candidateSelected} = this.state;
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
                                        style={selectPageStyles.choiceContainer}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.isSelected ? 'selected': 'not selected'}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                        <TouchableOpacity
                            style={candidateSelected ? buttonStyles.next_blue_button_2 : buttonStyles.hidden}
                            onPress={() => this.props.navigation.navigate('SenatorCandidates')}
                            disabled={!candidateSelected}>
                            <Text style={candidateSelected ? textStyles.button : selectTextStyles.button}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={selectPageStyles.body}/>
            </>
        );
    }
}
