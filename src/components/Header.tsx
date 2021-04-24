import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImage from "../assets/tony.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  
  // states
  const [userName, setUserName] = useState<string>();
  
  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem(`@plantmanager:user`);
      setUserName(user || "");
    }
    
    loadStorageUserName().catch(e => e.getMessage());
  }, []);
  
  return (
    <View style={ styles.container }>
      <View>
        <Text style={ styles.greeting }>Olá,</Text>
        <Text style={ styles.userName }>{ userName }</Text>
      </View>
      <Image source={ userImage } style={ styles.userImage }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  }
});
