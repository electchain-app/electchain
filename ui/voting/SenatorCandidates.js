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

export default class SenatorCandidateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            senatorCandidates: [
                {name: 'Ted Cruz'},
                {name: "Beto O'Rourke"},
                {name: 'Dr. D'}
            ],
            candidateSelected: false
        };
    }

    componentDidMount() {
        let choices = this.state.senatorCandidates.map((item, index) => {
            item.isSelected = false
            return {...item};
        });
        this.setState({senatorCandidates : choices});
        console.log('Choices: ', choices);
    }

    selectionHandler = (idx) => {
        const {senatorCandidates, candidateSelected} = this.state;
        let choices = senatorCandidates.map((item, index) => {
            if (idx === index) {
                item.isSelected = !item.isSelected;
                this.setState({candidateSelected: item.isSelected})
                SyncStorage.set('senatorChoice', item.name);
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
        this.setState({senatorCandidates: choices});
    }

    render() {
        const {senatorCandidates, candidateSelected} = this.state;
        return(
            <>
                <SafeAreaView style={selectPageStyles.sectionContainer}>
                    <View>
                        <SelectInstructionText
                            header="senator"
                            details="of the Texas"
                        />
                        {
                            senatorCandidates.map((item, index) => {
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
                            onPress={() => this.props.navigation.navigate('PresidentialCandidates')}>
                            <Text style={textStyles.button}>Prev</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={candidateSelected ? buttonStyles.blue_button : buttonStyles.hidden}
                            onPress={() => this.props.navigation.navigate('ReviewSelection')}
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
