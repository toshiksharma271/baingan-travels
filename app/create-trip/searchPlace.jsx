import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function SearchPlace() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Search",
      headerTransparent: true,
    });
  }, []);

  

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
      
      placeholder='Search'
      onPress={(data, details = null) => {

        // 'details' is provided when fetchDetails = true
        console.log(data.description);
        console.log(details.geometry.location.lat);
        console.log(details.name);
      }}
      query={{
        
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}

      
    />
    
    </View>
  );
}
