import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {textStyles, selectTextStyles} from './styles.js';

import {WelcomeScreen} from './Welcome';

// Import Registration Screens
import {IDInstructionsScreen} from './registration/IDInstructions';
import {VoterInfoScreen} from './registration/VoterInfo';
import {RegisteredVoterApprovalScreen} from './registration/RegisteredVoterApproval';
import {ScanIDScreen, ViewPicScreen} from './registration/ScanID';
import {LiveSelfieScreen} from './registration/LiveSelfie';
import {IdentityApprovalScreen} from './registration/IdentityApproval';
import {ApprovedRegistrationScreen} from './registration/ApprovedRegistration';


// Import Voting Screens
import {VoteInstructionScreen} from './voting/VoteInstruction';
import PresidentialCandidateScreen from './voting/PresidentialCandidates';
import SenatorCandidateScreen from './voting/SenatorCandidates';
import {ReviewSelectionScreen} from './voting/ReviewSelection';
import {ConfirmationScreen} from './voting/Confirmation';

/* Reusable Components */
const InstructionText = (props) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={textStyles.header}>{props.header}</Text>
      <Text style={textStyles.details}>{props.details}</Text>
    </View>
  );
}

const CenteredInstructionText = (props) => {
  return (
    <View style={{marginBottom: 10, marginTop: 20, textAlign: 'center'}}>
      <Text style={[textStyles.header, {textAlign: 'center'}]}>{props.header}</Text>
      <Text style={[textStyles.details, {textAlign: 'center'}]}>{props.details}</Text>
    </View>
  );
}

const SelectInstructionText = (props) => {
  return (
      <View style={{marginBottom: 20}}>
        <Text style={selectTextStyles.header}>{props.header}</Text>
        <Text style={selectTextStyles.details}>{props.details}</Text>
      </View>
  );
}

const App: () => React$Node = () => {

  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(true);
  const Stack = createStackNavigator();

  return (
  // Define all of the screens
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />

      {/* Registration Screens */}
      <Stack.Screen name="IDInstructions" component={IDInstructionsScreen}/>
      <Stack.Screen name="VoterInfo" component={VoterInfoScreen}/>
      <Stack.Screen name="RegisteredVoterApproval" component={RegisteredVoterApprovalScreen}/>
      <Stack.Screen name="ScanID" component={ScanIDScreen} />
      <Stack.Screen name="LiveSelfie" component={LiveSelfieScreen}/>
      <Stack.Screen name="IdentityApproval" component={IdentityApprovalScreen}/>
      <Stack.Screen name="ApprovedRegistration" component={ApprovedRegistrationScreen}/>
      <Stack.Screen name="ViewPic" component={ViewPicScreen} options={{headerTitle: 'Retake picture'}}/>

      {/* Voting Screens */}
      <Stack.Screen name="VoteInstruction" component={VoteInstructionScreen}/>
      <Stack.Screen name="PresidentialCandidates" component={PresidentialCandidateScreen}/>
      <Stack.Screen name="SenatorCandidates" component={SenatorCandidateScreen}/>
      <Stack.Screen name="ReviewSelection" component={ReviewSelectionScreen}/>
      <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App
export {InstructionText, CenteredInstructionText, SelectInstructionText};
