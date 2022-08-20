import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Button,
  Headline,
  TextInput,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const LoginScreen = () => {
  const inset = useSafeAreaInsets();
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <View style={[styles.welcomeContainer, { paddingTop: inset.top }]}>
        <Headline style={{color:'white'}}>Welcome to Starship</Headline>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput keyboardType="email-address" textContentType="emailAddress" placeholder="E-Mail" />
        <TextInput
          style={{
            marginTop: 20,
          }}
          placeholder="Password"
          secureTextEntry={visible}
        />
        <TouchableOpacity style={styles.buttonEye} onPress={
          ()=>{
            setVisible(!visible)
            setShow(!show)
          }
        }>
          <MaterialCommunityIcons
          name={show === false ? 'eye-outline' : "eye-off-outline"}
          size={30}
          color="grey"
          />
        </TouchableOpacity>
        <Button mode="contained" style={styles.button}>
          Login
        </Button>

        <Button mode="text" style={styles.button}>
          Terms & Conditions
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    backgroundColor: DefaultTheme.colors.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flex: 2.5,
    padding: 25,
  },
  button: {
    marginTop: 20,
  },
  buttonEye:{
      position: 'absolute', 
      right: 38, 
      top:115
  }
});

export default LoginScreen;
