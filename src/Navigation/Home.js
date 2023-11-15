import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import OrderListScreen from '../screens/OrderListScreen';
import ProfileScreen from '../screens/ProfileScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthContext } from '../contexts/AuthContext';
import MapCheck from '../components/MapCheck';

const Stack = createStackNavigator()

const HomeNavigator = () => {
    const {dbUser} = useAuthContext()

  return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
            >
                {/* If dbUser is defined render HomeScreen : if not render ProfileScreen */}
                {dbUser ? 
                <Stack.Screen name='HomeScreen' component={HomeScreen}/> :
                <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
                }

                <Stack.Screen name='OrderListScreen' component={OrderListScreen}/>
                <Stack.Screen name='OrderScreen' component={OrderScreen}/> 
                <Stack.Screen name='DestinationSearch' component={DestinationSearch}/>
                <Stack.Screen name='SearchResults' component={SearchResults}/>
                <Stack.Screen name='MapCheck' component={MapCheck}/>
      </Stack.Navigator>
  )
}

export default HomeNavigator