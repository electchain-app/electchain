/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './ui/App';
import {name as appName} from './app.json';

//TODO: enable once we start aws stuff, commented out bc aws-exports doesnt exist in repo
// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

AppRegistry.registerComponent(appName, () => App);
