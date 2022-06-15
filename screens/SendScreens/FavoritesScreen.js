import { View, TextInput, Text, StyleSheet } from "react-native";

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Favorites Screen</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
