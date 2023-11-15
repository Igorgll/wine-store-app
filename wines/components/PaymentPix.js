import React, { useState, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Animated,
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
import randomstring from "randomstring";
import * as Clipboard from "expo-clipboard";
import { Dialog, Portal, Button } from "react-native-paper";

export default function PaymentPix({ onSelect }){
  const navigation = useNavigation();

  const [isSelected, setIsSelected] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [randomPixCopy, setRandomPixCopy] = useState("");
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  
  const togglePix = () => {
    const toValue = isSelected ? 0 : 60;

    Animated.timing(animatedHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setIsSelected(!isSelected);

    if (!isSelected) {
      const newRandomPixCopy = randomstring.generate(28);
      setRandomPixCopy(newRandomPixCopy.toUpperCase());
    }
  };

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    setIsDialogVisible(true);
    onSelect("PIX")
  };

  const hideDialog = () => {
    setIsDialogVisible(false);
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
      <View
        style={{
          height: 60,
          borderColor: "#BFC1C3",
          borderWidth: 1,
          borderRadius: 6,
          justifyContent: "center",
          paddingStart: 20,
          paddingEnd: 20,
        }}
      >
        <TouchableOpacity onPress={togglePix}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 24, height: 24 }}
              source={{ uri: "https://imgur.com/53YUk9s.png" }}
            />
            <Text style={{ fontFamily: "Montserrat_500Medium", color: "#000000", fontSize: 20, paddingLeft: 8 }}>
              PIX
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          height: animatedHeight,
          overflow: "hidden",
          borderColor: isSelected ? "#BFC1C3" : "transparent",
          borderWidth: 1,
          borderRadius: 6,
          borderTopWidth: 0,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingStart: 20,
          paddingEnd: 20,
        }}
      >
      <TouchableOpacity 
        onPress={() => copyToClipboard(randomPixCopy)}
      >
        <View style={{ flexDirection: "row", gap: 40, alignItems: "center" }}>
          <Text style={{ fontSize: 18, color: "#7c7e80" }}>{ randomPixCopy }</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={{uri: "https://imgur.com/oUTzyek.png"}}
          />
        </View>
      </TouchableOpacity>
      </Animated.View>
      <Portal>
        <Dialog visible={isDialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>PIX copiado com sucesso!</Dialog.Title>
          <Dialog.Actions>
            <Button onPress={hideDialog} color="#421926">Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
});
