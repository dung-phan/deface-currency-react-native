import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import firebase from "firebase";
import Background from "./components/Background";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Settings from "./components/Settings";
import Map from "./components/Map";
export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyB_fZTHt2FP2PUunPu5ETPMCQsSmDdrJTo",
      authDomain: "one-time-password-b75b8.firebaseapp.com",
      databaseURL: "https://one-time-password-b75b8.firebaseio.com",
      projectId: "one-time-password-b75b8",
      storageBucket: "one-time-password-b75b8.appspot.com",
      messagingSenderId: "249004593545",
      appId: "1:249004593545:web:00e2783f4e9b42aebb1158",
      measurementId: "G-B3EZJEB4FC"
    };
    firebase.initializeApp(config);
  }
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: Background },
      signup: { screen: SignUp },
      signin: { screen: SignIn },
      main: {
        screen: TabNavigator({
          feeds: { screen: MainPage },
          review: {
            screen: StackNavigator({
              map: { screen: Map },
              settings: { screen: Settings }
            })
          }
        })
      }
    });
    return <MainNavigator />;
  }
}
