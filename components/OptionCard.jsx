import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function OptionCard({option , selectedTraveler}) {
  const router = useRouter();
  return (
   <TouchableOpacity
    onPress={()=>router.push('/create-trip/date')}
   style={{
    padding:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    borderRadius:15,
    marginBottom:20,
    backgroundColor:'pink'
   }}
   >
    <View>
    <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        color:'black',
    }}>
    {option.title}
    </Text>
    <Text style={{
        fontFamily:'outfit-medium',
        fontSize:17,
        color:'grey',
    }}>
    {option.desc}
    </Text>
    </View>
    <Text style={{
      fontSize:40,
    }}>
    {option.icon}
    </Text>
       
      
    </TouchableOpacity>
  )
}