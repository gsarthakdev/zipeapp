import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context"

import FavoritesScreen from "./screens/SendScreens/FavoritesScreen";
import AllContactsScreen from "./screens/SendScreens/AllContactsScreen";
import NewAddressScreen from "./screens/SendScreens/NewAddressScreen";
import ZipeLogo from "./assets/icons/ZipeLogo";

const TopTabs = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function SendScreens() {
  return (
    <>
    <SafeAreaProvider>
      <View style={styles.header}>
        <View style={styles.logoAndLabelContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/Zipe-Logo.png")} />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.headerLabelText}>Send</Text>
        </View>
        </View>
      </View>
      </SafeAreaProvider>
      <TopTabs.Navigator
        style={styles.navigator}
        screenOptions={{
          tabBarStyle: { backgroundColor: "black" },
          tabBarInactiveTintColor: "#5E5E5E",
          tabBarActiveTintColor: "white",
          tabBarIndicatorStyle: { backgroundColor: "white" },
          tabBarLabelStyle: { textTransform: "none", fontSize: 16 },
        }}
      >
        <TopTabs.Screen name="All Contacts" component={AllContactsScreen} />
        <TopTabs.Screen name="Favorites" component={FavoritesScreen} />
        <TopTabs.Screen name="New Address" component={NewAddressScreen} />
      </TopTabs.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: {backgroundColor: "#000000"},
            // headerTintColor: "white",
            headerShown: false,
          }}
        >
          <Stack.Screen name="Send" component={SendScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    // alignItems: "center",
    // justifyContent: "center",
  },
  navigator: {
    backgroundColor: "#000000",
    // marginTop: 150,
    flex: 2,
    overflow: true
  },
  header: {
    flex: 1,
    backgroundColor: "#000000",
    // alignItems: "center",
    // justifyContent: "center",
  },
  labelContainer: {
    alignItems: 'center'
  },
  headerLabelText: {
    color: "white",
    fontSize: 30,
    fontWeight: '800'
  },
  logoContainer: {
    alignItems: 'center',
    padding: 30
  },
  logoAndLabelContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});
