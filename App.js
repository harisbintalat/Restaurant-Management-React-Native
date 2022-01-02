import React,{useState} from 'react';
import { Text, View, StyleSheet ,Image } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"; 
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Customer from './components/Customer';
import Menu from './components/Menu';
import CustomerSignup from './components/CustomerSignup';
import AddMenu from './components/AddMenu';
import RestaurantSignup from './components/RestaurantSignup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen'
import ResultsShowScreen from './screens/ResultsShowScreen'
import AppDrawer from './screens/AppDrawer';
const Stack = createNativeStackNavigator();
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyCUK8xLNabk61yPwQHGt-Ip_3el1Lx2wA0",
    authDomain: "madproject-38a38.firebaseapp.com",
    projectId: "madproject-38a38",
    storageBucket: "madproject-38a38.appspot.com",
    messagingSenderId: "966674080756",
    appId: "1:966674080756:web:2f6a3c1aebd48fca308fa1"
  };
  if(firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
  }
  else {
      firebase.app();
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  
    // Do other things
  });
  
  return (
     
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Restaurant" component={Restaurant}/>
        <Stack.Screen name="Customer" component={Customer}/>
       {/* <Stack.Screen name ="Menu" component={Menu}/> */}
       <Stack.Screen name ="CustomerSignup" component={CustomerSignup}/>
       <Stack.Screen name ="AddMenu" component={AddMenu}/>
       <Stack.Screen name ="RestaurantSignup" component={RestaurantSignup}/>
       <Stack.Screen name="AppDrawer" component={AppDrawer} options={{ headerShown: false }} />
       <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
      
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
