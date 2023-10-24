import { View, SafeAreaView, TextInput} from 'react-native'
import React, { useState, useEffect, } from 'react'
import styles from './styles'
import PlaceRow from './placeRow';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace]= useState(null)

    const navigation = useNavigation();

    useEffect(()=>{
      if(originPlace && destinationPlace){
        navigation.navigate('OrderScreen', {
        originPlace,
        destinationPlace,
      })
      }
    },[originPlace, destinationPlace])

  return (
      <SafeAreaView>
          <View style={styles.container}>
              
          <GooglePlacesAutocomplete 
                    placeholder='From?'
                    onPress={(data, details = null) => {
                      setOriginPlace({data, details})
                      
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel="Current location"
                    styles={{
                      textInput:styles.textInput,
                      container: styles.autocompleteContainer,
                      listView:styles.listView,
                      separator:styles.separator,
                    }}
                    fetchDetails
                    query={{
                      key: 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY',
                      language: 'en',
                    }}
                    renderRow={(data)=> <PlaceRow data={data}/>
                    }
                    renderDescription={(data)=> data.description || data.vicinity
                    }
                    predefinedPlaces={[homePlace, workPlace]}
                />

              <GooglePlacesAutocomplete 
                    placeholder='Send to?'
                    onPress={(data, details = null) => {
                      setDestinationPlace({data, details})
                      
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                      textInput:styles.textInput,
                      container:{...styles.autocompleteContainer,top:55
                      },
                      separator:styles.separator,
                    }}
                    fetchDetails
                    query={{
                      key: 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY',
                      language: 'en',
                    }}
                    renderRow={(data)=> <PlaceRow data={data}/>
                    }
                />

                {/* Circle near Origin Input */}
                <View style={styles.circle}/>

                {/* Line between dots */}
                <View style={styles.line}/>

                {/* Square near Destination input */}
                <View style={styles.square}/>
                
          </View>
      </SafeAreaView>
  )
}

export default DestinationSearch