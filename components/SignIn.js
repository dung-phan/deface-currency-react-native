import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import { baseUrl } from "../constant";
class SignIn extends Component {
  state = { phone: "", code: "" };
  handleSubmit = async () => {
    console.log("does handle submit work in signin");
    const { phone, code } = this.state;
    try {
      await axios.post(`${baseUrl}/verifyOneTimePassword`, {
        phone,
        code
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Input
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder="Enter phone number"
          ></Input>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Input
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
            placeholder="Enter code"
          ></Input>
        </View>
        <Button
          onPress={this.handleSubmit}
          title="Submit"
          backgroundColor="blue"
        ></Button>
      </View>
    );
  }
}
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  }
});
