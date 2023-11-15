import React from 'react';

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
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

import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function Intro() {
  const navigation = useNavigation();
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ paddingTop: 50 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen")}}
          >
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 20,
              textAlign: "right",
              color: "#9DA2A9",
            }}
        >
        Skip
        </Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri:"https://imgur.com/H7Mp7Ta.png"}}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#9DA2A9",
            fontSize: 18,
            fontFamily: "Montserrat_500Medium",
            marginBottom: 6
          }}
        >
          Bem vindo(a) à sua jornada vinícola!
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 32,
            fontFamily: "LibreBaskerville_700Bold"
          }}
        >
          Descubra vinhos que se encaixam no seu gosto
        </Text>
      </View>
      <View style={{ flexDirection: "row-reverse", height: 130, alignItems: "center", justifyContent: "space-between" }}>
        <Pressable 
          style={styles.button}
          onPress={() => navigation.navigate("Intro2")}
        >
          <Text style={{color: "white", fontFamily: "Montserrat_400Regular"}}>Próximo</Text>
        </Pressable>
        <Image
          style={{ width: 91, height: 6, borderRadius: 10 }}
          source={{uri:"https://imgur.com/yIeAlqz.png"}}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 52,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#421926",
  }
});
