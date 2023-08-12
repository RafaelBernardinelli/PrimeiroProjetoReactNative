import { StyleSheet, View } from "react-native";
import Universities from "./src/pages/Universities";

export default function App() {
  return (
    <View>
      <Universities />
      {/* <RandoMuserPage /> */}
      {/* <CatFacts /> */}
      {/* <Text>{aumenta}</Text>
      <MyButton title="Aumenta" onPressButton={aumentaValor} />
      <MyButton title="diminui" onPressButton={diminuirValor} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
