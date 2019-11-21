import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
const { height } = Dimensions.get("screen");

class Background extends Component {
  static navigationOptions = {
    title: "Home",
    tabBarIcon: <Icon name="home" size={30} />
  };

  onChange = () => {
    this.props.navigation.navigate("signup");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFill
          }}
        >
          <ImageBackground
            source={require("../assets/test.jpeg")}
            style={{ flex: 1, height: null, width: null }}
            imageStyle={{ opacity: 0.85 }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  padding: 4,
                  paddingLeft: 7,
                  paddingRight: 7,
                  fontSize: 60,
                  fontWeight: 700,
                  color: "white",
                  borderWidth: 2,
                  borderColor: "white"
                }}
              >
                deface $
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ height: height / 4.5, justifyContent: "center" }}>
          <TouchableHighlight onPress={this.onChange}>
            <View
              style={{
                ...styles.button
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>SIGN UP</Text>
            </View>
          </TouchableHighlight>
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
    height: 40,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
});
