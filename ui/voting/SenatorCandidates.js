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
                {name: 'John Cornyn (R)'},
                {name: 'M.J. Hegar (D)'},
                {name: 'David B. Collins (G)'},
                {name: 'Kerry McKennon (L)'},
                {name: 'Ricardo Turullols-Bonilla (I)'}
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
                                        style={selectPageStyles.choiceContainer}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.isSelected ? 'selected': 'not selected'}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                    <View style={{flexDirection: 'row', }}>
                        <TouchableOpacity
                            style={buttonStyles.prev_blue_button}
                            onPress={() => this.props.navigation.navigate('PresidentialCandidates')}>
                            <Text style={buttonStyles.text}>Prev</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={candidateSelected ? buttonStyles.next_blue_button : buttonStyles.hidden}
                            onPress={() => this.props.navigation.navigate('ReviewSelection')}
                            disabled={!candidateSelected}>
                            <Text style={candidateSelected ? buttonStyles.text : selectTextStyles.button}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={selectPageStyles.body}/>
            </>
        );
    }
}
