import 'react-native-gesture-handler';
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {WelcomeScreen} from './Welcome';

// Import Registration Screens
import {IDInstructionsScreen} from './registration/IDInstructions';
import {VoterInfoScreen} from './registration/VoterInfo';
import {RegisteredVoterApprovalScreen} from './registration/RegisteredVoterApproval';
import {ScanIDScreen} from './registration/ScanID';
import {LiveSelfieScreen} from './registration/LiveSelfie';
import {IdentityApprovalScreen} from './registration/IdentityApproval';
import {ApprovedRegistrationScreen} from './registration/ApprovedRegistration';

// Import Voting Screens
import {VoteInstructionScreen} from './voting/VoteInstruction';
import {CandidateScreen} from './voting/Candidates';
import {ReviewSelectionScreen} from './voting/ReviewSelection';
import {ConfirmationScreen} from './voting/Confirmation';

const InstructionText = (props) => {
  return (
    <View>
      <Text>{props.header}</Text>
      <Text>{props.details}</Text>
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
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>

      {/* Registration Screens */}
      <Stack.Screen name="IDInstructions" component={IDInstructionsScreen}/>
      <Stack.Screen name="VoterInfo" component={VoterInfoScreen}/>
      <Stack.Screen name="RegisteredVoterApproval" component={RegisteredVoterApprovalScreen}/>
      <Stack.Screen name="ScanID" component={ScanIDScreen}/>
      <Stack.Screen name="LiveSelfie" component={LiveSelfieScreen}/>
      <Stack.Screen name="IdentityApproval" component={IdentityApprovalScreen}/>
      <Stack.Screen name="ApprovedRegistration" component={ApprovedRegistrationScreen}/>

      {/* Voting Screens */}
      <Stack.Screen name="VoteInstruction" component={VoteInstructionScreen}/>
      <Stack.Screen name="Candidates" component={CandidateScreen}/>
      <Stack.Screen name="ReviewSelection" component={ReviewSelectionScreen}/>
      <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
export {InstructionText};

