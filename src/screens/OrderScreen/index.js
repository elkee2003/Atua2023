import { View, Text, TextInput, Pressable, ScrollView, TouchableWithoutFeedback,Keyboard, Alert } from 'react-native'
import React,{useState,} from 'react'
import styles from './styles'
// import ReviewOrderDetails from '../../components/ReviewOrderDetails'
import {DataStore} from 'aws-amplify'
import { useAuthContext } from '../../contexts/AuthContext'
import { Order } from '../../models'
import { OrderStatus } from '../../models'
import { useOrderContext } from '../../contexts/OrderContext'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {
    // const [isShowModal, setIsShowModal]= useState(false)

    // const dismissKeyboard = () => {
    //       Keyboard.dismiss();
    //     };

    const {recipientName, recipientNumber, orderDetails, setRecipientName, setRecipientNumber, setOrderDetails, orders, setOrders,} = useOrderContext()

    const {dbUser}= useAuthContext()
    const navigation = useNavigation()

    const goToReviewOrderDetails = async ()=>{
        if(recipientName && recipientNumber.length >= 11){
            // setIsShowModal(true)
            const newOrder = await DataStore.save(new Order({
                userID: dbUser.id,
                recipientName,
                recipientNumber,
                orderDetails,
                status:OrderStatus.READY_FOR_PICKUP
            }))
            setOrders([...orders, newOrder])
            setRecipientName('')
            setRecipientNumber('')
            setOrderDetails('')
            navigation.navigate('HomeScreen')

        }else{
          Alert.alert('Kindly feel the fields correctly. Thank you.')
        }
    }

    const changeSetIsShowModalToFalse =()=>{
      setIsShowModal(false)
    }


  return (
      <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.header}>Package Details:</Text>
            <TextInput
            style={styles.input}
            value={recipientName}
            onChangeText={setRecipientName}
            multiline
            placeholder='Sending to eg: Opus'
            />
            <TextInput
            style={styles.input}
            value={recipientNumber}
            onChangeText={setRecipientNumber}
            multiline
            placeholder='eg: 08030000000'
            keyboardType='number-pad'
            />
            <TextInput
            style={styles.description}
            value={orderDetails}
            onChangeText={setOrderDetails}
            multiline
            placeholder='eg: Letter, Food, Clothes, Breakable Items etc. You can also drop a short note. Kindly make it as short as possible'
            />
            <Pressable 
            onPress={goToReviewOrderDetails}
            style={styles.btn}>
                <Text style={styles.btnTxt}>
                    Done
                </Text>
            </Pressable>
            {/* {isShowModal && 
            <ReviewOrderDetails
            recipientNameD={recipientName}
            recipientNumberD={recipientNumber}
            orderDetailsD={orderDetails}
            changeSetIsShowModalToFalse={changeSetIsShowModalToFalse}
            setRecipientName={setRecipientName}
            setRecipientNumber={setRecipientNumber}
            setOrderDetails={setOrderDetails}
            />
            } */}
          </View>
      </TouchableWithoutFeedback>
  )
}

export default OrderScreen