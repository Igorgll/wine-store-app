import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  ScrollView
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
import { SearchBar } from '@rneui/themed';
import Product from "../components/Product";
import Poster from "../components/Poster";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const categoriesData = [
  { id: "1", text: "Rosé" },
  { id: "2", text: "Seco" },
  { id: "3", text: "Vermelho" },
  { id: "4", text: "Branco" },
]

const wines = [
  { 
    id: "1", 
    name: "Miolo Quinta do Seival Castas Portuguesas", 
    price: "R$69.90",
    year: 2018,
    description: "Este vinho português apresenta notas excepcionais de frutas brancas e uma elegante efervescência, tornando-o uma escolha sofisticada.",
    country: "Portugal",
    type: "Castas Portuguesas",
    imageUri: "https://imgur.com/Gxc5Ao6.png",
    sugar: "5g/0,03 gal",
    calories: "23kcal/0,03 gal"
  },
  { 
    id: "2", 
    name: "Villa Francioni Joaquim Rosé", 
    price: "R$54.90",
    year: 2020,
    description: "Desfrute da sofisticação deste vinho rosé brasileiro com notas de frutas vermelhas e um toque de elegância.",
    country: "Brasil",
    type: "Rosé",
    imageUri: "https://imgur.com/C6fFGUB.png",
    sugar: "4g/0,03 gal",
    calories: "22kcal/0,03 gal"
  },
  { 
    id: "3", 
    name: "Salton Paradoxo Tannat", 
    price: "R$89.90",
    year: 2017,
    description: "O tannat brasileiro Paradoxo oferece uma experiência única com seu sabor distintivo e taninos equilibrados.",
    country: "Brasil",
    type: "Tannat",
    imageUri: "https://imgur.com/DtevvJh.png",
    sugar: "6g/0,03 gal",
    calories: "25kcal/0,03 gal"
  },
  { 
    id: "4", 
    name: "Aurora Reserva Merlot", 
    price: "R$37.90",
    year: 2017,
    description: "Experimente o sabor aveludado deste merlot brasileiro, com notas de frutas maduras e um preço acessível.",
    country: "Brasil",
    type: "Merlot",
    imageUri: "https://imgur.com/rDN3M9f.png",
    sugar: "3g/0,03 gal",
    calories: "20kcal/0,03 gal"
  },
  { 
    id: "5", 
    name: "Casa Valduga Leopoldina Gran Reserva Merlot", 
    price: "R$129.90",
    year: 2014,
    description: "O merlot Gran Reserva Leopoldina combina elegância e estrutura, com notas de frutas vermelhas e carvalho.",
    country: "Brasil",
    type: "Merlot",
    imageUri: "https://imgur.com/fqxKaNi.png",
    sugar: "4g/0,03 gal",
    calories: "21kcal/0,03 gal"
  },
  { 
    id: "6", 
    name: "Miolo Lote 43 Merlot/Cabernet Sauvignon", 
    price: "R$129.90",
    year: 2020,
    description: "Este vinho brasileiro combina as uvas merlot e cabernet sauvignon, oferecendo uma experiência única em cada gole.",
    country: "Brasil",
    type: "Merlot/Cabernet Sauvignon",
    imageUri: "https://imgur.com/vPlmNZ4.png",
    sugar: "4g/0,03 gal",
    calories: "22kcal/0,03 gal"
  },
  { 
    id: "7", 
    name: "Lidio Carraro Grande Vindima Quorum", 
    price: "R$199.90",
    year: 2016,
    description: "O vinho Quorum da Lidio Carraro é uma obra-prima que combina harmoniosamente diversas castas, resultando em um sabor excepcional.",
    country: "Brasil",
    type: "Quorum",
    imageUri: "https://imgur.com/HYEutKQ.png",
    sugar: "5g/0,03 gal",
    calories: "24kcal/0,03 gal"
  },
  { 
    id: "8", 
    name: "Pizzato DNA 99", 
    price: "R$149.90",
    year: 2016,
    description: "O DNA 99 da Pizzato é uma celebração das vinhas velhas, com notas de frutas maduras e um toque de carvalho.",
    country: "Brasil",
    type: "DNA 99",
    imageUri: "https://imgur.com/SC8u4xd.png",
    sugar: "4g/0,03 gal",
    calories: "22kcal/0,03 gal"
  },
  { 
    id: "9", 
    name: "Cave Geisse Extra Brut", 
    price: "R$79.90",
    year: 2019,
    description: "Este vinho brasileiro Extra Brut é uma explosão de frescor e elegância, com notas cítricas e final persistente.",
    country: "Brasil",
    type: "Extra Brut",
    imageUri: "https://imgur.com/2SZDxDj.png",
    sugar: "2g/0,03 gal",
    calories: "18kcal/0,03 gal"
  },
  { 
    id: "10", 
    name: "Almaúnica Vinhas Velhas Pinot Noir", 
    price: "R$99.90",
    year: 2019,
    description: "O pinot noir Vinhas Velhas da Almaúnica é uma expressão única da variedade, com notas de frutas vermelhas e sutileza.",
    country: "Brasil",
    type: "Pinot Noir",
    imageUri: "https://imgur.com/G34rESt.png",
    sugar: "3g/0,03 gal",
    calories: "19kcal/0,03 gal"
  },
  { 
    id: "11", 
    name: "Perini Quatro", 
    price: "R$39.90",
    year: 2019,
    description: "O vinho Perini Quatro combina quatro variedades, criando um perfil frutado e equilibrado.",
    country: "Brasil",
    type: "Quatro",
    imageUri: "https://imgur.com/NVzk5Ml.png",
    sugar: "4g/0,03 gal",
    calories: "20kcal/0,03 gal"
  },
  { 
    id: "12", 
    name: "Georges Aubert Brut Tradition", 
    price: "R$49.90",
    year: 2019,
    description: "O Brut Tradition de Georges Aubert é uma celebração do estilo francês, com notas de maçã verde e elegância.",
    country: "França",
    type: "Brut Tradition",
    imageUri: "https://imgur.com/3MuNVG4.png",
    sugar: "2g/0,03 gal",
    calories: "18kcal/0,03 gal"
  },
  { 
    id: "13", 
    name: "Pizzato Legno Chardonnay", 
    price: "R$59.90",
    year: 2020,
    description: "O chardonnay Legno da Pizzato é envelhecido em carvalho, resultando em um vinho rico e complexo com notas de baunilha.",
    country: "Brasil",
    type: "Chardonnay",
    imageUri: "https://imgur.com/Lp2PRbw.png",
    sugar: "3g/0,03 gal",
    calories: "20kcal/0,03 gal"
  },
  { 
    id: "14", 
    name: "Valduga Villa Lobos Cabernet Sauvignon", 
    price: "R$49.90",
    year: 2018,
    description: "Este cabernet sauvignon de Villa Lobos revela a elegância da variedade, com notas de cassis e taninos suaves.",
    country: "Brasil",
    type: "Cabernet Sauvignon",
    imageUri: "https://imgur.com/ONCAsYi.png",
    sugar: "4g/0,03 gal",
    calories: "22kcal/0,03 gal"
  },
  { 
    id: "15", 
    name: "Salton Paradoxo Brut Chardonnay", 
    price: "R$39.90",
    year: 2021,
    description: "O Brut Chardonnay Paradoxo da Salton é uma opção refrescante com notas de maçã verde e final persistente.",
    country: "Brasil",
    type: "Brut Chardonnay",
    imageUri: "https://imgur.com/ZoiNWgt.png",
    sugar: "3g/0,03 gal",
    calories: "19kcal/0,03 gal"
  },
  { 
    id: "16", 
    name: "Pizzato Brut Rose", 
    price: "R$59.90",
    year: 2019,
    description: "O vinho brut rosé da Pizzato é uma combinação elegante de frutas vermelhas e um toque de acidez.",
    country: "Brasil",
    type: "Brut Rose",
    imageUri: "https://imgur.com/tEC5yVQ.png",
    sugar: "4g/0,03 gal",
    calories: "22kcal/0,03 gal"
  },
];

export default function HomeScreen() {
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

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 28, paddingTop: 18, paddingBottom: 16 }}>
        <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 14, color: "#9DA2A9" }}>{item.text}</Text>
      </View> 
    );
  }

  
  const renderProduct = ({ item }) => {
    return(
      <Product item={ item } />
    );
  }

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontFamily: "LibreBaskerville_700Bold", fontSize: 24 }}>O Que Você Gostaria?</Text>
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
          style={{ fontFamily: "Montserrat_400Regular", fontSize: 16 }}
          inputStyle={{ backgroundColor: "#EEEEEE" }}
          containerStyle={{ backgroundColor: "#FFFFFF", borderBottomColor: 'transparent',
          borderTopColor: 'transparent', }}
          inputContainerStyle={{backgroundColor: "#EEEEEE" }}
          round={ true }
          placeholderTextColor={ "#BFC1C3" }
          placeholder="Pesquisar"
        />
      </View>
      <Poster />
      <View>
       <FlatList
          horizontal={true}
          data={categoriesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ScrollView>
        <FlatList
          data={wines}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productContainer}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 60,
    flexDirection: "column",
    backgroundColor: "#FFFFFF"
  },
  searchBarContainer: {
    justifyContent: "center",
    height: 90
  },
  productContainer: {
    justifyContent: "center"
  },
})