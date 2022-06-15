import { View, TextInput, Text, StyleSheet } from "react-native";

function AllContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}> All Contacts Screen</Text>
    </View>
  );
}

export default AllContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
