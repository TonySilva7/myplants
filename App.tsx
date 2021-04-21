import { Jost_400Regular, Jost_600SemiBold, useFonts } from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import React from "react";
import { Confirmation } from "./src/pages/Confirmation";

function App() {
  
  const [fontIsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  if (!fontIsLoaded) {
    return <AppLoading/>;
  }
  
  return (
    <Confirmation/>
  );
}

export default App;