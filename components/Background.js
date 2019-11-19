import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableHighlight
} from "react-native";
const { height } = Dimensions.get("window");

class Background extends Component {
  buttonOpacity = new Animated.Value(1);

  bgY = new Animated.Value(0);

  onChange = () => {
    Animated.timing(this.bgY, {
      toValue: -200
    }).start();
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
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill
          }}
        >
          <Image
            source={require("../assets/image.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </Animated.View>
        <View style={{ height: height / 4.5, justifyContent: "center" }}>
          <TouchableHighlight onPress={this.onChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.bgY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
            </Animated.View>
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
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
});
