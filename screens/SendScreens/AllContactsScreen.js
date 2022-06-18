import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

function AllContactsScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchTxtInput}
        placeholder="Search Recipient"
        placeholderTextColor="#525252"
      />
      <View style={styles.iconsContainer}>
        <View style={styles.azdropdownContainer}>
          <View style={styles.dropDownIcon}>
            <Image source={require("../../assets/DropdownIcon.png")} />
          </View>
          <Image source={require("../../assets/FilterAZ.png")} />
        </View>
        <View style={styles.filterIcon}>
          <Image source={require("../../assets/FilterIcon.png")} />
        </View>
      </View>
    </View>
  );
}

export default AllContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 30,
  },
  searchTxtInput: {
    borderColor: "white",
    backgroundColor: "#1F1E1E",
    borderWidth: 2,
    borderRadius: 15,
    height: 65,
    fontSize: 18,
    color: "white",
    padding: 22,
  },
  iconsContainer: {
    flexDirection: "row-reverse",
    padding: 10,
  },
  filterIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  azdropdownContainer: {
    flexDirection: "row-reverse",
    backgroundColor: "#404040",
    borderRadius: 5,
    // minHeight: 20,
    padding: 5,
  },
  dropDownIcon: {
    marginLeft: 5,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
