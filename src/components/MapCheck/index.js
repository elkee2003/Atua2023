import { View, Text, useWindowDimensions, PermissionsAndroid, Platform, Pressable, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

const MapCheck = () => {
    const {width, height} = useWindowDimensions()
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
                setMyPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                console.log(myPosition)
                },
                (error) => {
                console.log(error);
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        };

    requestLocationPermission();
    }, []);
  return (
    <View>
      <MapView
        style={{width, height:height - 150}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: 37.4219,
          longitude: -122.084,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
  )
}

export default MapCheck