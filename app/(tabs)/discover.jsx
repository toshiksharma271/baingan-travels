import { View, Text,Image} from 'react-native'
import React from 'react'

export default function discover() {
  return (
    <View style={{
      padding:20,
      paddingTop:50,
    
    }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:30
      
      }}>This is Discover section </Text>
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