import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Button } from "react-native-elements";
import MapView from "react-native-maps";
export default class Map extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: 4.9,
      latitude: 52.38,
      longitudeDelta: 0.06,
      latitudeDelta: 0.1
    }
  };
  componentDidMount() {
    this.setState({ mapLoaded: true });
  }
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
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <MapView region={this.state.region} style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
