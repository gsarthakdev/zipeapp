import { View, TextInput, Text, StyleSheet } from "react-native";

function NewAddressScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>New Address Screen</Text>
    </View>
  );
}

export default NewAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
