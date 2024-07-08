import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [name,setName] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  const showToast = () => {
    ToastAndroid.show('Fill All the Details!', ToastAndroid.SHORT);
  };

const OnCreateAccount=()=>{

  if(!email|| !password|| !name){
    showToast();
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      router.replace('/mytrip')
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      // ..
    });
}

  return (
    <View style={{ padding: 25, paddingTop: 50 , backgroundColor:Colors.white , height:'100%'}}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          color: Colors.darkGrey,
          marginTop: 30,
        }}
      >
        Create New Account
      </Text>
      {/* Name */}

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
          }}
        >
          Name
        </Text>
        <TextInput style={styles.input} placeholder="Enter Name" onChangeText={(value)=>setName(value)}></TextInput>
      </View>

      {/* Email */}

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(value)=>setEmail(value)}></TextInput>
      </View>

      {/* Password */}

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value)=>setPassword(value)}
          placeholder="Enter Password"
          secureTextEntry={true}
        ></TextInput>
      </View>
      {/* Create new user Button  */}

      <TouchableOpacity 
      onPress={OnCreateAccount}
      style={styles.button}
        
        >
            <Text style={{
                textAlign:"center",
                color:Colors.white,
                fontFamily:'outfit-regular',
                fontSize:20
            
            }} >
                Create Account
            </Text>
        </TouchableOpacity>

{/* Create Account Button */}

        <TouchableOpacity style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 10,
            borderBlockColor:Colors.darkGrey,
            borderWidth:1,
        }}
        onPress={()=>{
          router.navigate('auth/sign-in')
        }}
        >
            <Text style={{
                textAlign:"center",
                color:Colors.darkGrey,
                fontFamily:'outfit-regular',
                fontSize:20
            
            }} >
                Sign In
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "grey",
    fontFamily: "outfit-regular",
  },
  button: {
    marginTop: 70,
    padding: 15,
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
  },
});
