import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
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

export default function OrderDetails({ route }) {
    const navigation = useNavigation();
    const { name, imageUri, price, quantity, cep, street, number, onSelect } = route.params;
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
    });

    const [modalVisible, setModalVisible] = React.useState(false);

    if(!fontsLoaded) {
      console.log("Fontes não carregaram.");
      return null;
    }

    const openModal = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
      navigation.navigate("Intro");
    };

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontFamily: "LibreBaskerville_700Bold", fontSize: 28 }}>
              Confirmação
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
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
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 20, fontFamily: "Montserrat_600SemiBold", marginBottom: 8 }}>Endereço de Entrega</Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#7c7e80", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10 }}>CEP:</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10, paddingLeft: 6 }}>{ cep }</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#7c7e80", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10 }}>Rua:</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10, paddingLeft: 6 }}>{ street }</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#7c7e80", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10 }}>Número:</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10, paddingLeft: 6 }}>{ number }</Text>
            </View>
            <Text style={{ fontSize: 20, fontFamily: "Montserrat_600SemiBold", marginBottom: 10, marginTop: 20 }}>Pagamento</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#7c7e80", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10 }}>Método de Pagamento:</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: "Montserrat_500Medium", marginBottom: 10, paddingLeft: 6 }}>{ onSelect }</Text>
            </View>
          </View>
        </View>
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
              onPress={openModal}
              style={{ justifyContent: "center",
              alignItems: "center",
              paddingVertical: 2,
              paddingHorizontal: 12,
              borderRadius: 8,
              height: 60,
              width: 300,
              backgroundColor: "#421926",
            }}>
              <Text style={{color: "white", fontFamily: "Montserrat_500Medium"}}>Concluir pedido</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={{ fontSize: 20, fontFamily: "Montserrat_500Medium", marginBottom: 16, textAlign: "center" }}>Parabéns, seu pedido foi feito com sucesso!</Text>
                <Pressable onPress={closeModal} style={styles.modalCloseButton}>
                  <Text style={{ color: 'white' }}>OK</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
    backgroundColor: "#EEEEEE",
    position: "relative"
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#421926',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: "100%"
  },
});
