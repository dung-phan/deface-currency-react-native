import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
export default class FoodDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Food details",
    headerRight: (
      <Button title="Back" onPress={() => navigation.navigate("feeds")} />
    )
  });
  render() {
    return (
      <View>
        {console.log("is it work?")}
        <Text> No text? </Text>
        <Text> No text? </Text>
        <Text> No text? </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
