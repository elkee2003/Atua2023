import { View, ActivityIndicator, Image, useWindowDimensions, PermissionsAndroid, Platform,} from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

import TMediums from '../../assets/data/TMediums';

const HomeMap = () => {
  const [myPosition, setMyPosition] = useState(null)
  
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
            console.log(position)
            const {latitude, longitude}=position.coords;
            setMyPosition({latitude,longitude})
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
    <View>
       {
      myPosition ? 
      <MapView
      style={{width:"100%", height:"100%"}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
      latitude: myPosition.latitude ,
      longitude:  myPosition.longitude ,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}
      >
        {TMediums.map((TMedium)=>{
          return <Marker
                key={TMedium.id}
                coordinate={{ latitude : TMedium.latitude , longitude : TMedium.longitude }}>
                  <Image style={{width:50,
                  height:70,
                  resizeMode:'contain',
                  transform:[{
                  rotate:`${TMedium.heading}.deg`
                  }]
                  }} 
                image source={getImage(TMedium.type)}/>
                </Marker>
        })}
      </MapView> 
      : 
      <ActivityIndicator size={"large"}/>
      }
    </View>
  )
}

export default HomeMap