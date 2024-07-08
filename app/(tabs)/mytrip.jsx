import { View, Text, Image, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import {Colors} from './../../constants/Colors'
import StartNewTripCard from './../../components/MyTrips/StartNewTripCard'

import { Ionicons } from '@expo/vector-icons';
export default function MyTrip() {
 
const [userTrips,setUserTrips] = useState([]);


  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.white,
      height:'100%'
    
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:35
      
      }}>My Trips</Text>
     <TouchableOpacity>
        <Ionicons name="add-circle-sharp" size={40} color="black"  onMagicTap={Colors.PRIMARY} />
     </TouchableOpacity> 
      </View>

      {userTrips.length===0?
      <StartNewTripCard />
      :null
    }
    </View>
  )
}