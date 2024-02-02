import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import RouteMap from '../../components/RouteMap'
import AtuaTypes from '../../components/AtuaTypes'
import { useLocationContext } from '../../contexts/LocationContext'
// import { useLocationContext } from '../OrderScreen'
// import { useRoute } from '@react-navigation/native'

const SearchResults = () => {

  // const {originPlace,destinationPlace} = useLocationContext()
  // const route = useRoute()
  // console.log(route.params)
  // const {originPlace, destinationPlace} = route.params

  const {originPlace, destinationPlace} = useLocationContext()

  return (
    <View style={{display:'flex', justifyContent:'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 415}}>
             <RouteMap origin={originPlace} destination={destinationPlace}/>
        </View>

        <View style={{height:400,}}>
            <AtuaTypes/>
        </View>

    </View>
  )
}

export default SearchResults