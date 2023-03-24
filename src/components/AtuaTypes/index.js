import { View, Text,Pressable} from 'react-native'
import React from 'react'

import styles from './styles'
import AtuaTypeRow from '../AtuaTypeRow'
import deliveryTypes from '../../assets/data/types'

const AtuaTypes = () => {
    const confirm = () =>{
        console.warn('confirmed delivery')
    }
  return (
    <View>
        {deliveryTypes.map(type => <AtuaTypeRow type={type} key={type.id}/>)}

        <Pressable onPress={confirm} style={styles.confirmBtn}>
            <Text style={styles.text}>Confirm Delivery</Text>
        </Pressable>
    </View>
  )
}

export default AtuaTypes