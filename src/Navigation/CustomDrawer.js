import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import styles from './styles';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        {/* User Row */}
        <View style={styles.userRow}>
            <View style={styles.userImage}/>
            <View>
                <Text style={styles.userProfile}>Elkanah Inko-Tariah</Text>
                <Text style={styles.userRate}>5.00 *</Text>
            </View>
            
        </View>

        {/* Messages Row */}
        <Pressable onPress={()=>console.warn('Messages')}>
            <Text style={styles.messageRow}>
                Messages
            </Text>
        </Pressable>

        {/* Do more */}
        <Pressable onPress={()=>console.warn('Do more with account')}>
            <Text style={styles.doMore}>
                Do more with your account
            </Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={()=>console.warn('Make money delivering')}>
            <Text style={styles.makeMoney}>
                Make money delivering
            </Text>
        </Pressable>

      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer