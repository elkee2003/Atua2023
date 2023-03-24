import React from 'react'
import { View, Text, } from 'react-native'
import HomeNavigator from './Home';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

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

      <Drawer.Navigator
      drawerContent={(props)=><CustomDrawer {...props}/>} 
      screenOptions={{headerShown:false}} >

        <Drawer.Screen name='Home' component={HomeNavigator}/>
        <Drawer.Screen name='Your Trips'>
          {()=><DummyScreen name={'This Your Trips'}/>}
        </Drawer.Screen>
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

    </NavigationContainer>
  )
}

export default RootNavigator;