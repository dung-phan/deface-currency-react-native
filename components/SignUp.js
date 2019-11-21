import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import axios from "axios";
import { baseUrl } from "../constant";
class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up",
    tabBarIcon: <Icon name="ios-contact" type="ionicon" size={30} />
  };
  state = { phone: "" };
  handleSubmit = async () => {
    console.log("does handle submit work");
    try {
      await axios.post(`${baseUrl}/createUser`, { phone: this.state.phone });
      await axios.post(`${baseUrl}/requestOneTimePassword`, {
        phone: this.state.phone
      });
    } catch (err) {
      console.log(err);
    }
    this.props.navigation.navigate("signin");
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
        <Button
          onPress={this.handleSubmit}
          title="Submit"
          backgroundColor="blue"
        ></Button>
      </View>
    );
  }
}
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  }
});
