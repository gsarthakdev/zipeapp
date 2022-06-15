import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import FavoritesScreen from "./screens/SendScreens/FavoritesScreen";
import AllContactsScreen from "./screens/SendScreens/AllContactsScreen";
import NewAddressScreen from "./screens/SendScreens/NewAddressScreen";

const TopTabs = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function SendScreens() {
  return (
    <TopTabs.Navigator style={styles.navigator} screenOptions={{
      tabBarStyle: {backgroundColor: "black"},
      tabBarInactiveTintColor: "#5E5E5E",
      tabBarActiveTintColor: "white",
      tabBarIndicatorStyle: {backgroundColor: "white"},
      

    }}>
      <TopTabs.Screen name="All Contacts" component={AllContactsScreen} />
      <TopTabs.Screen name="Favorites" component={FavoritesScreen} />
      <TopTabs.Screen name="New Address" component={NewAddressScreen} />
    </TopTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Send" component={SendScreens}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  navigator: {
    backgroundColor: "#000000",
  }
});
