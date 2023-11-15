import { View, Image, useWindowDimensions, PermissionsAndroid, Platform, } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

import TMediums from '../../assets/data/TMediums';

const HomeMap = () => {
  
  const {width, height} = useWindowDimensions()
  const [myPosition, setMyPosition] = useState({})
  // myPosition useState(null) this is what it's meant to be

    // useEffect Hook for Location
    useEffect(() => {
      const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Atua Location Request',
              message: 'Atua needs access to your location.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.DENIED) {
            console.log('Location permission denied');
            return;
          }
        }
  
        Geolocation.getCurrentPosition(
          (position) => {
            console.log('This is', position)
            setMyPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            console.log('show very', myPosition.latitude, myPosition.longitude)
          },
          (error) => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      };
  
      requestLocationPermission();
    }, []);

  const getImage=(type)=>{
    if (type === 'Walk'){
        return require('../../assets/images/Walk.png')
    }
    if (type === 'Bike'){
        return require('../../assets/images/Bike.jpg')
    }
    if (type === 'Car'){
        return require('../../assets/images/top-UberXL.png')
    }
    return require('../../assets/images/Walk.png')
  }

  return (    
    <MapView
    style={{width, height:height - 150}}
    provider={PROVIDER_GOOGLE}
    showsUserLocation
    followsUserLocation
    initialRegion={{
      latitude: 37.421998,
      longitude: -122.084,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
    >

        {TMediums.map((TMedium)=>{
              return <Marker
              key={TMedium.id}
              coordinate={{ latitude : TMedium.latitude , longitude : TMedium.longitude }}>
                <Image style={{width:50, height:70, resizeMode:'contain', transform:[{rotate:`${TMedium.heading}.deg`}]
                      }} 
                 image source={getImage(TMedium.type)}/>
            </Marker>
            })}

      
     </MapView>
  )
}

export default HomeMap