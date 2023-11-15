import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
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
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export default function AddressForm({ onSubmit, onClose }) {
  const navigation = useNavigation();
  const [street, setStreet] = useState('');
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
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

    const handleSubmit = () => {
      if(!cep || !street || !number) {
        Alert.alert("Atenção", "Por favor, preencha todos os campos.")
        return;
      }

      const addressData = { cep, street, number };
      onSubmit(addressData);

      navigation.navigate("OrderDetails", {
          cep,
          street,
          number
        });
        
        onClose();
    };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Endereço de Entrega</Text>

      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        keyboardType="numeric"
        onChangeText={(text) => setCep(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Rua"
        value={street}
        onChangeText={(text) => setStreet(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Número"
        value={number}
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 18,
    marginBottom: 18,
    fontFamily: "Montserrat_500Medium",
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#421926',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});