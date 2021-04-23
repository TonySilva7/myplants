import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import waterDrop from "../assets/waterdrop.png";

import { Header } from "../components/Header";
import { PlantCardSecondary } from "../components/PlantCardSecondary";
import { loadPlant, PlantProps } from "../libs/storage";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function MyPlants() {
  // states
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();
  
  // effects
  useEffect(() => {
    async function loadStorageData() {
      const plantStored = await loadPlant();
      const nextTime = formatDistance(
        new Date(plantStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );
      
      setNextWatered(`Não esqueça de regar a ${ plantStored[0].name } à ${ nextTime }!`);
      setMyPlants(plantStored);
      setLoading(false);
    }
    
    loadStorageData().catch((e) => e.getMessage());
  }, []);
  
  return (
    <View style={ styles.container }>
      <Header/>
      <View style={ styles.spotLight }>
        <Image source={ waterDrop } style={ styles.spotLightImage }/>
        <Text style={ styles.spotLightText }> { nextWatered } </Text>
      </View>
      
      <View style={ styles.plants }>
        <Text style={ styles.plantsTitle }>Próximas regadas</Text>
        <FlatList
          data={ myPlants }
          keyExtractor={ (item) => String(item.id) }
          renderItem={ ({ item }) => (
            <PlantCardSecondary data={ item }/>
          ) }
          showsVerticalScrollIndicator={ false }
          contentContainerStyle={ { flex: 1 } }
        />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotLight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    
  },
  spotLightImage: {
    width: 60,
    height: 60
  },
  spotLightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    textAlign: "auto",
  },
  plants: {
    flex: 1,
    width: "100%",
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  }
});