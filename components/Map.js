import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
export default class Map extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Find nearest location",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate("settings")}
      />
    ),
    headerStyle: {
      marginTop: 20
    }
  });

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
