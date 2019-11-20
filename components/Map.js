import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";
import Polyline from "@mapbox/polyline";
import locations from "../mockData";
const { width, height } = Dimensions.get("screen");
const key = "insert your Google API key";
export default class Map extends Component {
  state = {
    longitude: null,
    latitude: null,
    locations: locations
  };
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      error => console.log("Error:", error)
    );
    const {
      locations: [sampleLocation]
    } = this.state;

    this.setState(
      {
        desLatitude: sampleLocation.coords.latitude,
        desLongitude: sampleLocation.coords.longitude
      },
      this.mergeCoords
    );
  }
  mergeCoords = () => {
    const { latitude, longitude, desLatitude, desLongitude } = this.state;

    const hasStartAndEnd = latitude !== null && desLatitude !== null;

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`;
      const concatEnd = `${desLatitude},${desLongitude}`;
      this.getDirections(concatStart, concatEnd);
    }
  };
  async getDirections(startLoc, desLoc) {
    try {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=${key}`
      );
      const respJson = await resp.json();
      const response = respJson.routes[0];
      const distanceTime = response.legs[0];
      const distance = distanceTime.distance.text;
      const time = distanceTime.duration.text;
      const points = Polyline.decode(
        respJson.routes[0].overview_polyline.points
      );
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        };
      });
      this.setState({ coords, distance, time });
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  onMarkerPress = location => () => {
    const {
      coords: { latitude, longitude }
    } = location;
    this.setState(
      {
        destination: location,
        desLatitude: latitude,
        desLongitude: longitude
      },
      this.mergeCoords
    );
  };
  renderMarkers = () => {
    const { locations } = this.state;
    return (
      <View>
        {locations.map((location, idx) => {
          const {
            coords: { latitude, longitude }
          } = location;
          return (
            <Marker
              key={idx}
              coordinate={{ latitude, longitude }}
              onPress={this.onMarkerPress(location)}
            />
          );
        })}
      </View>
    );
  };

  render() {
    const {
      latitude,
      longitude,
      coords,
      destination,
      time,
      distance
    } = this.state;
    if (latitude) {
      return (
        <MapView
          showsUserLocation
          style={styles.mapStyle}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.06
          }}
        >
          <View
            style={{
              width,
              paddingTop: 5,
              alignSelf: "center",
              alignItems: "center",
              height: height * 0.15,
              backgroundColor: "white",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Estimated Time: {time}</Text>
            <Text style={{ fontWeight: "bold" }}>
              Estimated Distance: {distance}
            </Text>
          </View>
          <MapView.Polyline
            strokeWidth={2}
            strokeColor="red"
            coordinates={coords}
          />
          <Image
            source={{ uri: destination && destination.uri }}
            style={{
              flex: 1,
              width: width * 0.95,
              alignSelf: "center",
              height: height * 0.15,
              position: "absolute",
              bottom: height * 0.01
            }}
          />
          {this.renderMarkers()}
        </MapView>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>We need your permission to access your location.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapStyle: {
    flex: 1
  }
});
