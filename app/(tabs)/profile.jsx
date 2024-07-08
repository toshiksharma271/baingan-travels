import { View, Text, Image } from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <View style={{
      paddingTop:50,
      padding:20,
    
    }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:30
      
      }}>This is Profile section </Text>
       <Image
        source={require("./../../assets/images/login-image.jpeg")}
        style={{
          width: "100%",
          height: 510,
        }}
      />
    </View>
  )
}