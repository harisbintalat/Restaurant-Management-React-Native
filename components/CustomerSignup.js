import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';
// import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Customer from './Customer'
export default function CustomerSignup({ navigation }) {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: ""
  });

  function handleChange(text, eventName) {
    console.log(values)
    setValues(prev => {
      return {
        ...prev,
        [eventName]: text
      }
    })
  }

  const log = () => {
    navigation.navigate("Customer");
  }

  function register() {
    const { name, phone, address, email, password } = values;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => { 
        firebase.firestore().collection('Customers').doc(user.user.uid).set({ 
          uid: user.user.uid,
          email: email,
          password: password,
          name: name,
          phone: phone,
          address: address
        });
        
        navigation.replace("AddMenu",{id: user.user.uid})
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (

    <View styles={styles.container}>

      <ImageBackground source={require('../assets/food8.jpg')} style={{ width: '100%', height: '100%' }}>

        <View style={styles.view1}>
          <Text style={styles.labal3}>
            Create Account
          </Text>

          <Text style={styles.label1}>Name </Text>
          <TextInput style={styles.input} placeholder="Enter name" onChangeText={text => handleChange(text, "name")} />
          <Text style={styles.label1}>Phone No. </Text>
          <TextInput style={styles.input} placeholder="Enter phone no." keyboardType="numeric" onChangeText={text => handleChange(text, "phone")} />
          <Text style={styles.label1}>Address </Text>
          <TextInput style={styles.input} placeholder="Enter address" onChangeText={text => handleChange(text, "address")} />

          <Text style={styles.label1}>Email </Text>
          <TextInput style={styles.input} placeholder="Enter email" onChangeText={text => handleChange(text, "email")} />
          <Text style={styles.label1}>Password </Text>
          <TextInput style={styles.input} placeholder="Enter password" secureTextEntry={true} onChangeText={text => handleChange(text, "password")} />


          <TouchableOpacity style={{
            backgroundColor: 'olivedrab',
            borderRadius: 30,
            height: 40,
            width: 120,
            borderWidth: 1,
            marginTop: 5,
            marginLeft: 100,
            color: 'white',
            textAlign: "center"
          }} onPress={() => register()} >
            <Text style={{ color: 'white', fontSize: 25, textAlign: "center", justifyContent: "center" }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.labal2}>
            Login Instead
          </Text>

          <TouchableOpacity style={{
            backgroundColor: 'olivedrab',
            borderRadius: 30,
            height: 40,
            width: 120,
            borderWidth: 1,
            marginTop: 5,
            marginLeft: 130,
            color: 'white',
            textAlign: "center"
          }} onPress={log} >
            <Text style={{ color: 'white', fontSize: 25, textAlign: "center", justifyContent: "center" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>


    </View>
  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: "center",
    backgroundColor: 'black',

  },
  view1: {
    marginTop: 65,
    marginLeft: 30,
    alignContent: "center",
  },

  labal2: {
    fontSize: 29,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    fontFamily: 'serif'

  },
  labal3: {
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    fontFamily: 'serif',
    marginTop: -70,

  },

  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "darkgrey",
    color: "white",
    fontSize: 15,

  },
  label1: {
    marginTop: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white'
  },

});