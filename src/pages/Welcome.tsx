import { Feather } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {
  
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.wrapper }>
        <Text style={ styles.title }> Gerencie { '\n' } suas plantas de { '\n' } forma fácil </Text>
        
        <Image source={ WateringImg } style={ styles.image } resizeMode="contain"/>
        
        <Text style={ styles.subtitle }>
          Não esqueça mais de regar suas { '\n' } plantas.
          Nós cuidamos de lembrar você { '\n' } sempre que precisar.
        </Text>
        
        <TouchableOpacity style={ styles.button } activeOpacity={ 0.8 }>
          <Feather name="chevron-right" style={ styles.buttonIcon }/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    lineHeight: 32,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    fontFamily: fonts.text,
    lineHeight: 26,
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 30,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
});
