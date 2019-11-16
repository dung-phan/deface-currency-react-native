import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
class Background extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/image.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 4.5 }}>
          <View style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>SIGN IN</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Background;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
});
