import * as React from 'react';
import { Text, View, StyleSheet, Image ,TextInput,TouchableOpacity , ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Restaurant from './Restaurant';
import Customer from "./Customer";

export default function Home({navigation}) {
  
const rs=()=>{
  navigation.navigate("Restaurant");
}
const cs=()=>{
  navigation.navigate("Customer");
}
  
  return (
    <View style={styles.container}>  
    <ImageBackground source={require('../assets/food6.jpg')} style={{height:'100%' , width:'100%'  }}>
      <View style={styles.view1}>
         <Image style={styles.logo} source={require('../assets/digidine.png')} />
      </View>
      <View style={styles.view2}>
         <Text style={styles.labal}>
            WELCOME TO DIGIDINE  
          </Text>
          <Text style={{fontSize: 22,fontWeight: 'bold', textAlign: 'center',marginTop:20 ,color:'yellow' , fontStyle:'italic'}}>
            YOU ARE  
          </Text>
      </View>
      <View style={{flexDirection:"row" , marginTop:30}}>
          <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:50,
          width:160,
          borderWidth: 1,
          marginTop:10,
          marginLeft:10,
          color:'white',
          }} onPress={rs}>
          <Text style={{color:'white' , fontSize:25 ,textAlign:"center" ,justifyContent:"center" }}>
                Restaurant
          </Text>
          </TouchableOpacity>

           <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:50,
          width:160,
          borderWidth: 1,
          marginTop:10,
          marginLeft:10,
          color:'white',
          }}  onPress={cs}>
          <Text style={{color:'white' , fontSize:25 , textAlign:"center" , justifyContent:"center"}}>
                Customer
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
  marginTop:100,
  marginRight:10
  },

  view2:{
  marginTop:40,
  },
  
  labal: { 
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'yellow',
    fontFamily:'serif'

  },
  logo: {
  marginTop:20,
  
    height: 228,
    width: 400,
    
  }
});