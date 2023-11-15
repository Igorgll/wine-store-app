import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image
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
import DescriptionSpecs from "../components/DescriptionSpecs.js";
import BottomDescriptionSpecs from "../components/BottomDescriptionSpecs.js";
import { useRoute } from "@react-navigation/native";

export default function Description() {
    const route = useRoute();
    const { name, ano, pais, tipo, price, imageUri, description, sugar, calories } = route.params;

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
        <DescriptionSpecs name={ name } ano={ ano } pais={ pais } tipo={ tipo } price={ price } imageUri={ imageUri } />
        <BottomDescriptionSpecs name={ name } price={ price } description={ description } sugar={ sugar } calories={ calories } imageUri={ imageUri } />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: "column",
    backgroundColor: "#F4DEE3"
  },
})