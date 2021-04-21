import React from "react";
import { Welcome } from "./src/pages/Welcome";
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";

function App() {
  
  const [fontIsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  if (!fontIsLoaded) {
    return <AppLoading />
  }
  
  return (
    <Welcome/>
  );
}

export default App;