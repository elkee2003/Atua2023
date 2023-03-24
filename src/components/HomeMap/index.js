import { View, Image } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import TMediums from '../../assets/data/TMediums';

const HomeMap = () => {

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
}

  return (    
      <MapView
      style={{height:'100%', width:'100%'}}
       provider={PROVIDER_GOOGLE} 
       showsUserLocation={true}
       region={{
         latitude: 28.450627,
         longitude: -16.263045,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >

        {TMediums.map((TMedium)=>{
              return <Marker
              key={TMedium.id}
              coordinate={{ latitude : TMedium.latitude , longitude : TMedium.longitude }}>
                <Image style={{width:50, height:70,
                      resizeMode:'contain',
                      transform:[{
                        rotate:`${TMedium.heading}.deg`
                    }]
                      }} 
                 image source={getImage(TMedium.type)}/>
            </Marker>
            })}

      
     </MapView>
  )
}

export default HomeMap