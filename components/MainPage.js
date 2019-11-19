import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Card, Button } from "react-native-elements";
import Constants from "expo-constants";
const data = [
  {
    id: 1,
    text: "Rooseveltlaan 67",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Nassaukade 139",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Ooievaarsweg 190",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Gevleweg 42",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Pretoriusstraat 52",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Johan van Kuyckstraat 97",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Johan van Kuyckstraat 207",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Leeuwendalersweg 108",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];
export default class MainPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {data.map(item => {
            return (
              <Card key={item.id} image={{ uri: item.uri }} title={item.text}>
                <Text style={{ marginBottom: 10 }}>Some text here to test</Text>
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
