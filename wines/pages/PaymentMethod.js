import React, { useRef, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert
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

import PaymentCard from "../components/PaymentCard.js";
import PaymentPix from "../components/PaymentPix.js";
import AddressForm from "../components/AddressForm.js";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function PaymentMethod({ route }) {
  const navigation = useNavigation();
  const { name, imageUri, price, quantity } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

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

  const openModal = () => {
    if (!paymentMethod) {
      Alert.alert("Selecione um método de pagamento", "Você deve escolher um método de pagamento para continuar.");
      return;
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleAddressSubmit = () => {
    if(!paymentMethod) {
      Alert.alert("Selecione um método de pagamento", "Você deve escolher um método de pagamento para continuar.");
      return;
    }

    navigation.navigate("OrderDetails", {
      name,
      imageUri,
      price,
      quantity,
      onSelect: paymentMethod,
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontFamily: "LibreBaskerville_700Bold", fontSize: 28 }}>
            Pagamento
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <PaymentPix onSelect={(method) => setPaymentMethod(method)} />
        <PaymentCard onSelect={(method) => setPaymentMethod(method)} />
      </View>
      <View style={{ marginTop: 30, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={openModal}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 2,
            paddingHorizontal: 12,
            borderRadius: 8,
            height: 60,
            width: 300,
            backgroundColor: "#421926",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontFamily: "Montserrat_500Medium" }}>
            Prosseguir
          </Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {paymentMethod ? (
                <AddressForm onSubmit={handleAddressSubmit} onClose={() => setModalVisible(false)} />
              ) : (
                <View>
                  <Text style={{ fontSize: 18, fontFamily: "Montserrat_500Medium" }}>
                    Selecione um método de pagamento antes de inserir o endereço.
                  </Text>
                  <Pressable onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
                    <Text style={{ color: 'white' }}>Fechar</Text>
                  </Pressable>
                </View>
              )}
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
    backgroundColor: "#FFFFFF",
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
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 8,
  },
  modalCloseButton: {
    marginTop: 10,
    backgroundColor: '#421926',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
})