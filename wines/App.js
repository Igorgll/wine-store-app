import Intro from "./pages/Intro.js";
import Intro2 from "./pages/Intro2.js";
import Intro3 from "./pages/Intro3.js";
import HomeScreen from "./pages/HomeScreen.js";
import Description from "./pages/Description.js";
import Cart from "./pages/Cart.js";
import OrderDetails from "./pages/OrderDetails.js";
import PaymentMethod from "./pages/PaymentMethod.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false}} />
            <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false}} />
            <Stack.Screen name="Intro3" component={Intro3} options={{ headerShown: false}} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
            <Stack.Screen name="Description" component={Description} options={{ headerShown: false}} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false}} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false}} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
}