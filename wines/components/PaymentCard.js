import React, { useState, useRef, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  TextInput,
  Keyboard
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

export default function PaymentCard({ onSelect }){
  const navigation = useNavigation();

  const [isSelected, setIsSelected] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleCard = () => {
    const toValue = isSelected ? 0 : 260;

    Animated.timing(animatedHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setIsSelected(!isSelected);

    onSelect("Cartão Crédito/Débito")
  };

  const formatCardNumber = (text) => {
    const formattedText = text.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedText);
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
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <TouchableOpacity onPress={toggleCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 24, height: 24 }}
              source={{ uri: "https://imgur.com/v9bIm4l.png" }}
            />
            <Text style={styles.cardHeaderText}>Cartão de Crédito/Débito</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          maxHeight: animatedHeight,
          overflow: "hidden",
          borderColor: isSelected ? "#BFC1C3" : "transparent",
          borderWidth: 1,
          borderRadius: 6,
          borderTopWidth: 0,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 10,
          paddingStart: 10,
          paddingEnd: 10,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Nome no Cartão"
          placeholderTextColor="#7c7e80"
        />
        <TextInput
          style={styles.input}
          placeholder="Número do Cartão (0000-0000-0000-0000)"
          placeholderTextColor="#7c7e80"
          keyboardType="numeric"
          onChangeText={(text) => formatCardNumber(text)}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Validade (MM/AA)"
            placeholderTextColor="#7c7e80"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="CVV"
            placeholderTextColor="#7c7e80"
            keyboardType="numeric"
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  cardHeader: {
    height: 60,
    borderColor: "#BFC1C3",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },
  cardHeaderText: {
    color: "#000000",
    fontSize: 20,
    paddingLeft: 8,
    fontFamily: "Montserrat_500Medium",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#BFC1C3",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily: "Montserrat_400Regular",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});