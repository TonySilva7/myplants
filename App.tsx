import React from "react";
import { UserIdentification } from "./src/pages/UserIdentification";
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
    <UserIdentification/>
  );
}

export default App;