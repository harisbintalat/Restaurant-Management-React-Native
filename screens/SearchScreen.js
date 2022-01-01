import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen ({navigation}) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.background}>
         <ImageBackground source={require('../assets/food6.jpg')} style={{height:'100%' , width:'100%'  }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          navigation={navigation}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} navigation={navigation} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice("$$")} navigation={navigation} title="Big Spender" />
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
});

