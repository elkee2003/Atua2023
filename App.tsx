/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native';

import RootNavigator from './src/Navigation/Root';

import { Amplify } from 'aws-amplify';
// import awsconfig from './src/aws-exports';

// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true,
//   },
// });

// This right under, I'm trying to see if it will solve my datastore error problem
// import awsExports from './src/aws-exports';
// Amplify.configure(awsExports);

// This is the new import I'm trying
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);


const App = ()=>{

   return (
    <>
      <StatusBar/>
      <RootNavigator/>
    </>
  );
}
 

export default withAuthenticator(App);
