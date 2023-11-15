import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
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
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export default function Cart({ route }){
  const navigation = useNavigation();
  const { quantity, name, imageUri, price } = route.params;
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
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontFamily: "LibreBaskerville_700Bold", fontSize: 28 }}>Carrinho</Text>
      </View>
    </View>
      <ScrollView style={{ flex: 1, flexDirection: "column", position: "relative", marginTop: 30 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ borderWidth: 1, borderColor: "#F4DEE3", borderRadius: 10, height: 100 }}>
            <Image
              style={{ width: 100, height: 100 }} 
              source = {{uri: imageUri}}
            />
          </View>
        <View style={{ flex: 1, paddingStart: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: "Montserrat_500Medium", flexWrap: "wrap" }}>{ name }</Text>
          <View style={{ flexDirection: "row", paddingTop: 36, alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, fontFamily: "Montserrat_700Bold" }}>R${price}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 30, height: 30, backgroundColor: "#F4DEE3", borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontFamily: 'Montserrat_700Bold', color: '#421926', textAlign: 'center' }}>{quantity}</Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
    <View style={{ paddingBottom: 16 }}>
       <View style={{ width: "150%", height: 1, backgroundColor: "#421926", marginLeft: "-25%", marginRight: "-25%" }}></View>
    </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontFamily: "Montserrat_500Medium" }}>Preço Total</Text>
        <Text style={{ fontSize: 22, fontFamily: "Montserrat_700Bold" }}>R${price}</Text>
      </View>
      <View style={{ marginTop: 30, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethod", {
              name,
              imageUri,
              price,
              quantity,
            })}
            style={{ justifyContent: "center",
            alignItems: "center",
            paddingVertical: 2,
            paddingHorizontal: 12,
            borderRadius: 8,
            height: 60,
            width: 300,
            backgroundColor: "#421926",
        }}>
          <Text style={{color: "white", fontFamily: "Montserrat_500Medium"}}>Prosseguir para o pagamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 60,
    flexDirection: "column",
    backgroundColor: "#EEEEEE"
  }
})