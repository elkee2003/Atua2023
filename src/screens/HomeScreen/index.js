import { View, Dimensions } from 'react-native'
import React from 'react'

import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'
const HomeScreen = () => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 300}}>
             <HomeMap/>
        </View>

      {/* Bottom comp */}
      <HomeSearch/>
    </View>
  )
}

export default HomeScreen;