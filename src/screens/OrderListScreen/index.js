import { View, ScrollView, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import OrderListItem from '../../components/OrderListItem'
import { useOrderContext } from '../../contexts/OrderContext'

const OrderListScreen = () => {

  const {orders, recipientName} = useOrderContext()
  
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.header}>Your Orders</Text>
        {orders.length === 0 ? 
        <View style={styles.noOrder}>
          <Text style={styles.noOrderTxt}>
            You have no order
          </Text>
        </View> 
        : 
        orders.map((order)=>{
            return(
                <OrderListItem
                key={order.id}
                order={order}/>
            )
        })}

    </ScrollView>
  )
}

export default OrderListScreen