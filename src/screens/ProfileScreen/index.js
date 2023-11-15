import '@azure/core-asynciterator-polyfill'
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native'
import React, {useEffect, useState } from 'react'
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
       console.log(user)
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
      onChangeText={setAddress}
      placeholder='Address'
      style={styles.input}
      />
      
      {/* delete this pressable */}
      <Pressable onPress={onSave
      } style={styles.saveBackground}>
        <Text style={styles.save}>
          Save
        </Text>
      </Pressable>
      {/* delete pressable above */}

      <View style={styles.gContainer}>
        <GooglePlacesAutocomplete
        placeholder='Input Address'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
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
  )
}

export default ProfileScreen