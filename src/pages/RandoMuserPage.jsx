import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import RandoMuser from "../components/RandoMuser";

const RandoMuserPage = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Header name="Rando Muser Page" />
      </View>
      <RandoMuser />
    </SafeAreaView>
  );
};

export default RandoMuserPage;
