import * as React from 'react';
import { Text, View, StyleSheet, Image ,TextInput,TouchableOpacity , ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import AddMenu from './AddMenu';
import RestaurantSignup from './RestaurantSignup'
export default function Restaurant({navigation}) {


 const log =()=>{
    navigation.navigate("AddMenu");
  }

  const sign=()=>{
    navigation.navigate("RestaurantSignup");

  }
return(

  <View styles={styles.container}>
  
  <ImageBackground source={require('../assets/food8.jpg')} style={{width:'100%' , height:'100%' }}>

  <View style={styles.view1}>
      <Text style={styles.labal3}>
            Login
          </Text>
      <Text style={styles.label1}>Email </Text>
       <TextInput style={styles.input}   placeholder="Enter email"  />
      <Text style={styles.label1}>Password </Text>
       <TextInput style={styles.input}   placeholder="Enter password" secureTextEntry />
      <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:50,
          width:120,
          borderWidth: 1,
          marginTop:20,
          marginLeft:100,
          color:'white',
          textAlign:"center"
          }} onPress={log} >
          <Text style={{color:'white' , fontSize:25 ,textAlign:"center" ,justifyContent:"center" }}>
                Login
          </Text>
        </TouchableOpacity>
  </View>

  <View>
      <Text style={styles.labal2}>
            Become A Partner 
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
          }} onPress={sign}>
        <Text style={{color:'white' , fontSize:25 ,textAlign:"center" ,justifyContent:"center" }}>
                SignUp
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
  marginTop:110,
  marginLeft:30,
  alignContent:"center",
  },
  
   labal2: { 
    fontSize: 29, 
    marginTop:70,
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
    marginTop:-30,

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
     marginTop:10,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'white'
  },

});