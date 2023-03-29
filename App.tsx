/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {StatusBar,PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { withAuthenticator } from 'aws-amplify-react-native';


// This code below was meant to be added to 'App.js' if geolocation api needed to be aligned with browser (cross platform apps), or wanted it to support backward compaptibility. However it gave an error line under 'navigator', I assume it is because it is 'App.tsx' not 'App.js'. I had to leave it there, because it seems it works on the app despite the error line and if it is removed my app will not be able to see 'current location'. In other words it's instrumental to my app.
navigator.geolocation = require('@react-native-community/geolocation');

import RootNavigator from './src/Navigation/Root';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);


const App = ()=>{

  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Atua Location Request',
          message:
            'Atua needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(()=>{
    if(Platform.OS === 'android'){
      androidPermissions()
    }else{
      // IOS
      Geolocation.requestAuthorization()
    }
  },[])

   return (
    <>
      <StatusBar/>
      <RootNavigator/>
    </>
  );
}
 

export default withAuthenticator(App);
