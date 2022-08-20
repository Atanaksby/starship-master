import { StatusBar } from "expo-status-bar";
import React, { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./containers/login-screen";
import FeedScreen from "./containers/feed-screen";

import { TermsScreen } from "./containers/terms-screen";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <LoginScreen />
          {/* <TermsScreen /> */}
          {/* <FeedScreen /> */}
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
});
