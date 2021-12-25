import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image ,TextInput,TouchableOpacity , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker'; 

export default function AddMenu({navigation}) {
   const [image, setImage] = useState(null);
   
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
return(

  <View style={styles.container}>

     <Text style={styles.labal2}>
            Add Items
     </Text>
     <Text style={styles.label1}>Item Name </Text>
     <TextInput style={styles.input}   placeholder="Enter name"  />
     <Text style={styles.label1}>Item Price </Text>
     <TextInput style={styles.input}   placeholder="Enter nPrice"  keyboardType="numeric" />

     <View style={{flexDirection:'row'}}>

       <Text style={styles.labal3}>Item Picture </Text>
       <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:40,
          width:70,
          borderWidth: 1,
          marginTop:20,
          marginLeft:70,
          color:'white',
          textAlign:"center"
          }} onPress={pickImage} >
           <Image style={styles.logo} source={require('../assets/download.png')} />
        </TouchableOpacity>
        
      </View>
      
     

         {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 , marginLeft:20 }} />}
         
     

       <TouchableOpacity style={{ backgroundColor: 'olivedrab',
          borderRadius: 30,
          height:50,
          width:120,
          borderWidth: 1,
          marginTop:20,
          marginLeft:30,
          color:'white',
          textAlign:"center"
          }}  >
          <Text style={{color:'white' , fontSize:25 ,textAlign:"center" ,justifyContent:"center" }}>
                Add Item
          </Text>
        </TouchableOpacity>



  </View>
);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:"center",
    backgroundColor: 'black',
    
  },
  view1:{
  marginTop:20,
  marginLeft:30,
  marginRight:150,
  backgroundColor:"grey",
  height:70,
  
  },
  
   labal2: { 
    fontSize: 29, 
    marginTop:50,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'yellow',
    fontFamily:'serif'

  },
  logo: {
  
  
    height:40,
    width:70,
    
  },
   labal3: { 
    marginTop:25,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'white',

  },
  
  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor:"darkgrey",
    color:"white",
    fontSize:15,
    marginTop:5,
    
  },
   label1: {
     marginTop:10,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'white'
  },

});