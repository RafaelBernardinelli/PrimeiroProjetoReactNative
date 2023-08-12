import { StyleSheet, Text, View } from "react-native";

const Header = ({ name }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    paddingTop: 10, // Espaçamento para a barra de status
    height: 60, // Altura do cabeçalho
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Header;
