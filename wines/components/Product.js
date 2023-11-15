import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import {
  LibreBaskerville_400Regular,
  LibreBaskerville_400Regular_Italic,
  LibreBaskerville_700Bold,
} from '@expo-google-fonts/libre-baskerville';

import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export default function Product({ item }) {
  const navigation = useNavigation();

  const navigateToDescription = () => {
      navigation.navigate("Description", {
        name: item.name,
        ano: item.year,
        pais: item.country,
        tipo: item.type,
        price: item.price,
        imageUri: item.imageUri,
        description: item.description,
        sugar: item.sugar,
        calories: item.calories
    });
  };

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    LibreBaskerville_400Regular,
    LibreBaskerville_400Regular_Italic,
    LibreBaskerville_700Bold,
  })

  if(!fontsLoaded) {
    console.log("Fontes não carregaram.");
    return null;
  }
  
  return (
      <View style={styles.productBox}>
        <TouchableOpacity
          onPress={navigateToDescription}
        >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.imageUri }}
          />
        </View>
        <View style={{ position: "absolute", top: 220 }}>
          <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 12 }}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, position: "absolute", top: 245 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 90 }}>
          <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 12, color: "#892139" }}>{item.price}</Text>
        </View>
        <View>
          <AntDesign name="pluscircle" size={20} color="black" />
        </View>
      </View>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    productBox: {
      flex: 1, 
      alignItems: "center",
      width: 140,
      height: 300,
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderColor: "#421926",
      borderRadius: 16,
      position: 'relative'
    },
    imageContainer: {
    width: 160,
    height: 190,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 14,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})