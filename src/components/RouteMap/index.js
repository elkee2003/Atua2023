import { View, Image } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {

  const originLoc = {
    latitude:origin.details.geometry.location.lat,
    longitude:origin.details.geometry.location.lng
  }
  const destinationLoc = {
    latitude:destination.details.geometry.location.lat,
    longitude:destination.details.geometry.location.lng
  }

  
    const GOOGLE_MAPS_APIKEY = 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY';

  return (    
      <MapView
      style={{height:'100%', width:'100%'}}
       provider={PROVIDER_GOOGLE} 
       showsUserLocation={true}
       region={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >

      <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_MAPS_APIKEY}
          timePrecision='now'
          strokeWidth={4}
          strokeColor="black"
      />

        <Marker
              coordinate={originLoc}
              title={'Origin'}
        />

        <Marker
              coordinate={destinationLoc}
              title={'Destination'}
        />

     </MapView>
  )
}

export default RouteMap