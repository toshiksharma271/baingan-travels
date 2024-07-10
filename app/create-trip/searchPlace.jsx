import { View, Text, TextInput, FlatList, TouchableOpacity, textInputContainer } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from "./../../context/CreateTripContext";


export default function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();
  const {tripData,setTripData} = useContext(CreateTripContext)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Search",
      headerTransparent: true,
    });
  }, []);
useEffect(() => {
console.log(tripData);
}, [tripData])

  

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 100,
        backgroundColor: 'white',
        height: '100%',
      
        

      }}
    >
     {/* make border and styeing in search bar */}

    <GooglePlacesAutocomplete
     
      fetchDetails={true}
      

      placeholder='Search Place'
      // change place holder color
    
     
      onPress={(data, details = null) => {

        // 'details' is provided when fetchDetails = true

        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0].photo_reference,
            url:details?.url

          }
        });
        router.navigate('/create-trip/select-travaler')
      }}

      query={{
        
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
        styles={{
            textInputContainer:{
              borderWidth:1,
              borderRadius:5,
              marginTop:25,
              borderColor:'black',
              backgroundColor:'black',
              height:50,
              


            },
            textInput:{
              backgroundColor:'pink',
              color:'white',
              fontFamily:'outfit-medium',
              fontSize:20,
              height:50,
              borderRadius:5,
              
            },
            listView:{
              backgroundColor:'white',
              marginTop:10,
              


              
            }
        }}
      
    />
  
    </View>
  );
}
