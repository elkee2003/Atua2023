import { View, Text } from 'react-native'
import React, {useState,createContext, useContext} from 'react'


const LocationContext = createContext({})

const LocationContextProvider = ({children}) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace]= useState(null)

  return (
    <LocationContext.Provider value={{originPlace, destinationPlace, setOriginPlace, setDestinationPlace}}>
        {children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider

export const useLocationContext =()=>useContext(LocationContext)