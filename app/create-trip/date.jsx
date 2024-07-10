import { View, Text } from 'react-native'
import React , {useEffect }from 'react'
import { useNavigation } from 'expo-router'

export default function date() {
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true, 
            headerTransparent:true,
            headerTitle:"",
           
        })

    },[])
  return (
    <View>
      <Text style={{
        padding:20,
        paddingTop:100,
        backgroundColor:'white',
        height:'100%'
      }}>2:14</Text>
    </View>
  )
}