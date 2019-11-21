import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View } from "react-native";
import { Card, Button, Icon, Header } from "react-native-elements";
import Constants from "expo-constants";
import data from "../mockData";
export default class MainPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerRight: (
      <Button title="Back" onPress={() => navigation.navigate("feeds")} />
    ),
    tabBarIcon: <Icon name="ios-compass" type="ionicon" size={30} />
  });
  state = {
    data: data
  };
  sortLatest = () => {
    this.setState(
      this.state.data.sort((a, b) => {
        return b.update.localeCompare(a.update);
      })
    );
    console.log("check data", this.state.data);
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "FOOD LIST", style: { color: "#fff" } }}
          rightComponent={
            <Button title="Sort" onPress={this.sortLatest}></Button>
          }
        />
        <ScrollView style={styles.scrollView}>
          {this.state.data.map(item => {
            return (
              <Card key={item.id} image={{ uri: item.uri }} title={item.text}>
                <Text style={{ marginBottom: 10 }}>
                  Hmm, some kind of food?{" "}
                </Text>
                <Button
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
