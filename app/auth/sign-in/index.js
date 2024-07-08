import { View, Text, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import React, { useEffect, useState} from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";



export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

const SignInMethod = () =>{

   if(!email || !password){
    ToastAndroid.show("Please Enter All Details!",ToastAndroid.BOTTOM)
    return;
   }
  

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    if(errorCode==="auth/invalid-credential"){
      ToastAndroid.show("Invalid Credentials!",ToastAndroid.BOTTOM)
      return;
     }
  });
}

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 50,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          color: Colors.darkGrey,
          marginTop:30
        }}
      >
        Let's Sign You In
      </Text>

      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-regular",
          color: "grey",
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>

      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-regular",
          color: "grey",
          marginTop: 10,
        }}
      >
        You've been missed!
      </Text>
 {/* Email */}


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
          Email
        </Text>
        <TextInput
          onChangeText={(value)=>setEmail(value)}
          style={styles.input}
          placeholder="Enter Email"
         
        ></TextInput>
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
          onChangeText={(value)=>setPassword(value)}
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
        ></TextInput>
        <Text style={{
          marginTop:5,
          textAlign:"right",
        }}>
          Forgot Password?
        </Text>
    
      </View>
{/* Sign In Button  */}

      <TouchableOpacity style={styles.button}
      onPress={SignInMethod}
        >
            <Text style={{
                textAlign:"center",
                color:Colors.white,
                fontFamily:'outfit-regular',
                fontSize:20,            
            }} >
                Sign-In
          
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
          router.navigate('auth/sign-up')
        }}
        >
            <Text style={{
                textAlign:"center",
                color:Colors.darkGrey,
                fontFamily:'outfit-regular',
                fontSize:20
            
            }} >
                Create New Account
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
  button:{
    marginTop: 70,
    padding: 15,
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
    
  }
});
