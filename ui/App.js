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
      <Stack.Screen name="IDInstructions" component={IDInstructionsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="VoterInfo" component={VoterInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisteredVoterApproval" component={RegisteredVoterApprovalScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ScanID" component={ScanIDScreen} options={{headerShown: false}} />
      <Stack.Screen name="LiveSelfie" component={LiveSelfieScreen} options={{headerShown: false}}/>
      <Stack.Screen name="IdentityApproval" component={IdentityApprovalScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ApprovedRegistration" component={ApprovedRegistrationScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ViewPic" component={ViewPicScreen} options={{headerTitle: 'Retake picture'}} options={{headerShown: false}}/>

      {/* Voting Screens */}
      <Stack.Screen name="VoteInstruction" component={VoteInstructionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="PresidentialCandidates" component={PresidentialCandidateScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SenatorCandidates" component={SenatorCandidateScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ReviewSelection" component={ReviewSelectionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{headerShown: false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App
export {InstructionText, CenteredInstructionText, SelectInstructionText};
