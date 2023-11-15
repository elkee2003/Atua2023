import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useOrderContext } from '../../contexts/OrderContext'

const OrderListItem = ({order}) => {

  const {removeOrder} = useOrderContext()
  const warning = ()=>{
    Alert.alert('Warning', 'Are you sure you want to delete this order', 
    [
      {text: 'Yes', onPress:()=>{removeOrder(order.id)}},
      {text: 'No'},
    ], {cancelable:true})
  }
  return (
    <View style={styles.container}>
        <MaterialIcons style={styles.icon} name={'delivery-dining'} size={35}/>
        <View style={styles.txtRow}>
          <Text style={styles.txtName}>{order.recipientName}</Text>
          <Text style={styles.txt}>{order.destinationPlace}</Text>
          <Text style={styles.txts}>{order.orderDetails}</Text>
        </View>
        <AntDesign onPress={warning} style={styles.delIcon} name={'delete'} size={25}/>
    </View>
  )
}

export default OrderListItem