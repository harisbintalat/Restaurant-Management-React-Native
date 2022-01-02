import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({route, navigation }) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={{fontWeight:'bold'}}>{result.name}</Text>
      <Text style={{fontWeight:'bold'}}>{result.phone}</Text>
      <Text style={{fontWeight:'bold'}}>{result.rating}</Text>
      <Text style={{fontWeight:'bold'}}>{result.review_count}</Text>
      {/* <Text style={{fontWeight:'bold'}}>{result.country}</Text> */}
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
