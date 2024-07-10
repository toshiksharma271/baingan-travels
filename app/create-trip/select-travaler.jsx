import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import {TravelersList} from './../../constants/NoOfPeople'

import OptionCard from '../../components/OptionCard'

export default function SelectTravaler() {
    const navigation = useNavigation();
    const [selectedTraveler,setSelectedTraveler] = useState();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true, 
            headerTransparent:true,
            headerTitle:"",
           
        })

    },[])
  return (
    <View style={{
        padding:20,
        paddingTop:100,
        backgroundColor:'white',
        height:'100%'
    
    }}>
      <Text style={{
            fontFamily:'outfit-bold',
            fontSize:35,
            color:'#215bd0',
            marginBottom:10,
            
        
      }}>Who's Traveling</Text>
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            color:'grey',
            marginBottom:20,

            
        }}>Select the travelers for this trip</Text>

        <FlatList 
         data={TravelersList}
         renderItem={({item,index})=>(
            <TouchableOpacity
            onPress={()=>setSelectedTraveler(item.title)}
            >
                <OptionCard option={item}  selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
         )}
        />

        </View>



    </View>
  )
}