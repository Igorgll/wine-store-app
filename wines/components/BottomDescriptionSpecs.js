import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
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

export default function BottomDescriptionSpecs({ name, price, description, sugar, calories, imageUri }) {
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

  const [quantity, setQuantity] = useState(1);

  if(!fontsLoaded) {
    console.log("Fontes não carregaram.");
    return null;
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return(
      <View style={{ flex: 1, padding: 20, paddingTop: 30, height: 400, backgroundColor: "#FFFFFF", borderRadius: 40, borderBottomEndRadius: 0, borderBottomStartRadius: 0, position: "relative" }}>
        <Text style={{ fontSize: 28, fontFamily: "Montserrat_600SemiBold" }}>Descrição</Text>
        <Text style={{ fontSize: 18, fontFamily: "Montserrat_400Regular", marginTop: 14 }}>
          { description }
        </Text>
        <Text style={{ fontSize: 28, fontFamily: "Montserrat_600SemiBold", marginTop: 30 }}>Valores Nutricionais</Text>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", gap: 6, marginTop: 16 }}>
          <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 18 }}>Açúcar:
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>    { sugar }</Text>
          </Text>
          <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 18 }}>Calorias:
            <Text style={{ marginLeft: 50, fontFamily: "Montserrat_600SemiBold" }}>   { calories }</Text>
          </Text>
        </View>
        <View style={{ width: "150%", height: 1, backgroundColor: "#421926", position: "absolute", top: 260 }}></View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <TouchableOpacity
              onPress={decreaseQuantity}
            >
              <View style={{ width: 40, height: 40, backgroundColor: "#F4DEE3", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <AntDesign 
                  name="minus" 
                  size={24} 
                  color="#421926" 
                  />
              </View>
            </TouchableOpacity>
              <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Montserrat_700Bold' }}>{quantity}</Text>
              </View>
            <TouchableOpacity
              onPress={increaseQuantity}
            >
              <View style={{ width: 40, height: 40, backgroundColor: "#F4DEE3", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <AntDesign 
                  name="plus" 
                  size={24} 
                  color="#421926" 
                  />
              </View>
            </TouchableOpacity>
          </View>
          <Pressable 
            onPress={() => navigation.navigate("Cart", {
              quantity: quantity,
              name: name, 
              price: (parseFloat(price.replace("R$", "").replace(",", ".")) * quantity).toFixed(2),
              imageUri: imageUri,
            })}
            style={{ justifyContent: "center",
            alignItems: "center",
            paddingVertical: 2,
            paddingHorizontal: 12,
            borderRadius: 8,
            height: 60,
            backgroundColor: "#421926",
            }}>
            <Text style={{color: "white", fontFamily: "Montserrat_500Medium"}}>Adicionar ao carrinho</Text>
          </Pressable>
        </View>
      </View>
  );
}