import '@azure/core-asynciterator-polyfill'
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native'
import React, {useEffect, useState, } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Auth, DataStore } from 'aws-amplify'
import { User } from '../../models'
import styles from './styles'
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'


const ProfileScreen = () => {

  const {sub, dbUser, setDbUser} = useAuthContext()
  
    const [name, setName] = useState(dbUser?.name || "")
    const [address, setAddress] = useState(dbUser?.address || "")
    const [phoneNumber, setPhoneNumber]= useState(dbUser?.phoneNumber || "")
    const [lat, setLat] = useState(dbUser?.lat.toString() || "0")
    const [lng, setLng] = useState (dbUser?.lng.toString() || "0")  
   
    const navigation = useNavigation()

    // Start of Function to Create and Update User
    const createUser = async ()=>{
      try{
        const user = await DataStore.save(new User({
         name, 
         address,
         phoneNumber,
         lat:parseFloat(lat), 
         lng:parseFloat(lng), 
         sub
       })
       );
       console.log("I am User:",user)
       setDbUser(user)
     }catch(e){
       Alert.alert("Error", e.message)
     }
    }

    const updateUser= async ()=>{
      const user = await DataStore.save(User.copyOf(dbUser, (updated)=>{
        updated.name = name;
        updated.address = address;
        updated.phoneNumber = phoneNumber
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      }))
      setDbUser(user)
    }
    // End Of Function to Create and Update User

    // Function to Save Data
    const onSave= async()=>{
      if(dbUser){
        await updateUser()
        navigation.goBack()
      }else{
        await createUser()
        navigation.navigate('HomeScreen')
      }
      // navigation.goBack()
    }

    // Start Of GooglePlacesAutoComplete
    const handlePlaceSelect = (data, details = null) => {
      // Extract the address from the selected place
      const selectedAddress = details?.formatted_address || data.description;

      console.log( "Show the Lat, and Lng data and details:",data,details)
  
      // Update the address state
      setAddress(selectedAddress);
  
    };
    // End Of GooglePlacesAutoComplete

    return (
    <View style={styles.container}>

      <Text style={styles.title}>Profile</Text>

      <TextInput 
      value={name}
      onChangeText={setName}
      placeholder='Name'
      style={styles.input}
      />

      <TextInput 
      value={address}
      placeholder='Address'
      style={{...styles.input, color: '#04df04'}}
      />

      <View style={styles.gContainer}>
        <GooglePlacesAutocomplete
        placeholder='Select Address From Here'
        onPress={handlePlaceSelect}
        styles={{
          textInput:styles.gTextInput,
          textInputContainer:styles.gTextInputContainer,
          listView:styles.glistView,
          poweredContainer:styles.gPoweredContainer
        }}
        query={{
          key: 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY',
          language: 'en',
        }}
        />
      </View>

      {/* TextInputs that will be below GooglePlacesAutocomplete */}
      <View style={styles.inputsBelowG}>
        <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder='Phone Number'
        style={styles.input}
        />

        <TextInput 
        value={lat}
        onChangeText={setLat}
        placeholder='Latitude'
        keyboardType='numeric'
        style={styles.input}
        />

        <TextInput 
        value={lng}
        onChangeText={setLng}
        placeholder='Longitude'
        keyboardType='numeric'
        style={styles.input}
        />
        

        {/* Save */}
        <Pressable onPress={onSave
        } style={styles.saveBackground}>
          <Text style={styles.save}>
            Save
          </Text>
        </Pressable>
        
        {/* SignOut */}
        <Pressable onPress={()=>{Auth.signOut
        ()}}>
          <Text style={styles.signOut}>
            Sign out
          </Text>
        </Pressable>
      </View>
      
    </View>
  )
}

export default ProfileScreen