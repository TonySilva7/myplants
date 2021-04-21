import { Jost_400Regular, Jost_600SemiBold, useFonts } from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import React from "react";
import Routes from "./src/routes";
function App() {
  
  const [fontIsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  if (!fontIsLoaded) {
    return <AppLoading/>;
  }
  
  return (
    <Routes/>
  );
}

export default App;