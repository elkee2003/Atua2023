import { View, Text, Image} from 'react-native'
import React from 'react'

import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const AtuaTypeRow = (props) => {
    const {type} = props;

    const getImage=()=>{
        if (type.type === 'Walk'){
            return require('../../assets/images/Walk.png')
        }
        if (type.type === 'Bike'){
            return require('../../assets/images/Bike.jpg')
        }
        if (type.type === 'Car'){
            return require('../../assets/images/UberXL.jpeg')
        }
    }

  return (
    <View style={styles.container}>
        {/* image */}
        <Image style={styles.image} source={getImage()}/>

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
            {type.type} {''}
            <Ionicons name={'person'} size={17}/>
            3
        </Text>
        <Text style={styles.time}>8:03PM Delivery</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
        <Text style={styles.price}>est. ₦{type.price}</Text>
      </View>
    </View>
  )
}

export default AtuaTypeRow