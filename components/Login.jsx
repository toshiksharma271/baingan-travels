import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
 const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/login-image.jpeg")}
        style={{
          width: "100%",
          height: 510,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "outfit-bold",
            color:Colors.darkGrey
          }}
        >
          Baingan-Travels
        </Text>
        <Text
          style={{
            marginTop:20,
            fontSize: 17,
            fontFamily: "outfit-regular",
            textAlign: "center",
            color: "grey",
          }}
        >
          Your Ultimate Travel Companion Using The Power Of AI And Seamless Travel Planning Experience With Our Beautifully Designed Interface And Intuitive Features
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
            router.navigate('auth/sign-in')
        }}
        >
            <Text style={{
                textAlign:"center",
                color:Colors.white,
                fontFamily:'outfit-regular',
                fontSize:20
            
            }} >
            
                Get Started
            </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.white,
    marginTop: -30,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button:{
    
   marginTop:'30%',
   padding:15,
   backgroundColor:Colors.darkGrey,
   borderRadius:100,
   
  },
 
});
