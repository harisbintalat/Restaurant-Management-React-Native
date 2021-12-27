import React, {useState} from 'react';
import { Text, View, StyleSheet, Image ,TextInput,TouchableOpacity , ImageBackground} from 'react-native';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Restaurant from './Restaurant';
import AddMenu from './AddMenu'

export default function RestaurantSignup({navigation}) {
  const[values,setValues] = useState({
    resname:"",
    email:"",
    password:"",
    location: ""
  });

  function handleChange(text,eventName) {
    //console.log(values)
    setValues(prev=> {
      return {
        ...prev,
        [eventName] : text
      }
    })
  }
 
  const log =()=>{
    navigation.navigate("Restaurant");
  }

  function register() {
    const{resname,email,password,location} = values;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      navigation.replace("AddMenu")
  })
  .catch((error) => {
    alert(error.message);
  });
  }

return(

    <View styles={styles.container}>
  
  <ImageBackground source={require('../assets/food8.jpg')} style={{width:'100%' , height:'100%' }}>

  <View style={styles.view1}>
      <Text style={styles.labal3}>
            Create Account
          </Text>

        <Text style={styles.label1}> Restaurant Name </Text>
       <TextInput style={styles.input}   placeholder="Enter name"  onChangeText={text => handleChange(text, "resname")}  />
       <Text style={styles.label1}>Email </Text>
       <TextInput style={styles.input}   placeholder="Enter email"  onChangeText={text => handleChange(text, "email")}  />
       <Text style={styles.label1}>Password </Text>
       <TextInput style={styles.input}   placeholder="Enter password"  secureTextEntry={true}  onChangeText={text => handleChange(text, "password")} />
       <Text style={styles.label1}>Restaurant location </Text>
       <TextInput style={styles.input}   placeholder="Enter location"  onChangeText={text => handleChange(text, "location")} />


      <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:50,
          width:120,
          borderWidth: 1,
          marginTop:20,
          marginLeft:100,
          color:'white',
          textAlign:"center"
          }}  onPress={()=>register()}  >
          <Text style={{color:'white' , fontSize:25 ,textAlign:"center" ,justifyContent:"center" }}>
                Sign up
          </Text>
        </TouchableOpacity>
  </View>

  <View>
      <Text style={styles.labal2}>
            Login Instead
        </Text>

      <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:50,
          width:120,
          borderWidth: 1,
          marginTop:20,
          marginLeft:130,
          color:'white',
          textAlign:"center"
          }} onPress={log} >
        <Text style={{color:'white' , fontSize:25 ,textAlign:"center" ,justifyContent:"center" }}>
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
    textAlign:"center",
    backgroundColor: 'black',
    
  },
  view1:{
  marginTop:10,
  marginLeft:30,
  alignContent:"center",
  },
  
   labal2: { 
    fontSize: 29, 
    marginTop:40,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'yellow',
    fontFamily:'serif'

  },
   labal3: { 
    fontSize: 39, 
    fontWeight: 'bold',
    textAlign: 'center',
    color:'yellow',
    fontFamily:'serif',
    marginTop:60,

  },
  
  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor:"darkgrey",
    color:"white",
    fontSize:15,
    
  },
   label1: {
     marginTop:1,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'white'
  },

});