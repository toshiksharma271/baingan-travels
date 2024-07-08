import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import {SearchPlace} from "../../app/create-trip/searchPlace";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
    const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 50,
        alignItems: "center",
        gap: 25,
      }}
    >
        
          <Ionicons name="location-sharp" size={30} color="#215bd0" />
        
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 25,
        }}
      >
        No Trips Planned Yet!  
      </Text>
      <Text
        style={{
        fontFamily: "outfit-regular",
        fontSize: 20,
        textAlign: "center",
        color:'grey'
        }}
      >
        Look like its time to plan a new travel experience Get Started below
      </Text>
      <TouchableOpacity onPress={()=>{
            router.navigate('/create-trip/searchPlace')
      }} >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color:Colors.darkGrey,
            backgroundColor: "white",
            padding: 10,
            borderWidth:0.5,
            borderRadius: 10,
            shadowColor:'grey',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 50,

          }}
        >
          Start New Trip
        </Text>
    </TouchableOpacity>
    </View>
  );
}
