import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Card, Button } from "react-native-elements";
import Constants from "expo-constants";
import data from "../mockData";
export default class MainPage extends Component {
  onChange = () => {
    this.props.navigation.navigate("details");
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {data.map(item => {
            return (
              <Card key={item.id} image={{ uri: item.uri }} title={item.text}>
                <Text style={{ marginBottom: 10 }}>Some text here to test</Text>
                <Button
                  onPress={this.onChange}
                  icon={{ name: "code" }}
                  backgroundColor="blue"
                  title="View now!"
                ></Button>
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 10
  }
});
