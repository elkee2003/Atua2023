import React from 'react'
import { View, Text, } from 'react-native'
import HomeNavigator from './Home';
import ProfileScreen from '../screens/ProfileScreen';
import OrderListScreen from '../screens/OrderListScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import AuthContextProvider from '../contexts/AuthContext';
import OrderContextProvider from '../contexts/OrderContext';

const Drawer = createDrawerNavigator();

const DummyScreen = (props)=>{
  <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text>
      {props.name}
    </Text>
  </View>
}

const RootNavigator = () => {

  return (
    <NavigationContainer>

      <AuthContextProvider>
        <OrderContextProvider>
          <Drawer.Navigator
            drawerContent={(props)=><CustomDrawer {...props}/>} 
            screenOptions={{headerShown:false}} >
            
            <Drawer.Screen name='Home' component=   {HomeNavigator}/> 
            
            <Drawer.Screen name="Profile" component={ProfileScreen}/>

            <Drawer.Screen name="Your Orders" component={OrderListScreen}/>

            {/* Rendering of Other Screens */}  
            <Drawer.Screen name='Help'>
              {()=><DummyScreen name={'ThisHelp'}/>}
            </Drawer.Screen>
            <Drawer.Screen name='Wallet'>
              {()=><DummyScreen name={'ThisWallet'}/>}
            </Drawer.Screen>
            <Drawer.Screen name='Settings'>
            {()=><DummyScreen name={'ThisSettings'}/>}
            </Drawer.Screen>

          </Drawer.Navigator>
        </OrderContextProvider>
      </AuthContextProvider>

    </NavigationContainer>
  )
}

export default RootNavigator;