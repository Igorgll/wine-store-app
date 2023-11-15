import { AntDesign } from '@expo/vector-icons'; 
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
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
import { useNavigation } from "@react-navigation/native";

export default function DescriptionSpecs({ name, ano, pais, tipo, price, imageUri }) {
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
  
  return(
    <View style={{ height: 400, position: "relative", paddingTop: 0, paddingRight: 20, paddingLeft: 20, paddingBottom: 0 }}>
      <StatusBar style="auto" />
        <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
        <Text style={{ fontFamily: "LibreBaskerville_700Bold" , fontSize: 28, marginTop: 16, maxWidth: 300 }}>{ name }</Text>
          <View style={{ marginTop: 16, marginBottom: 6 }}>
            <Text style={{ fontSize: 20, fontFamily: "Montserrat_400Regular" }}>Ano</Text>
            <Text style={{ fontSize: 22, fontFamily: "Montserrat_700Bold" }}>{ ano }</Text>
          </View>
          <View style={{ marginTop: 16, marginBottom: 6 }}>
            <Text style={{ fontSize: 20, fontFamily: "Montserrat_400Regular" }}>País</Text>
            <Text style={{ fontSize: 22, fontFamily: "Montserrat_700Bold" }}>{ pais }</Text>
          </View>
          <View style={{ marginTop: 16, marginBottom: 42 }}>
            <Text style={{ fontSize: 20, fontFamily: "Montserrat_400Regular" }}>Tipo</Text>
            <Text style={{ fontSize: 22, fontFamily: "Montserrat_700Bold" }}>{ tipo }</Text>
          </View>
          <View>
            <Text style={{ fontSize: 30, fontFamily: "Montserrat_700Bold" }}>{ price }</Text>
          </View>
          <View style={{ position: "absolute", right: 30, top: 85 }}>
            <Image
              style={{ width: 120, height: 280 }}
              source={{ uri: imageUri }}
            />
          </View>
    </View>
  );
}