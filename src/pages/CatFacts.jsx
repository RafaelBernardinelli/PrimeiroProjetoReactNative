import axios from "axios";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import List from "../components/List";

const CatFacts = () => {
  const style = StyleSheet.create({
    colorChild: {
      backgroundColor: "red",
    },
  });

  const array = [
    { name: "Fulano", idade: 20 },
    { name: "Beltrano", idade: 22 },
    { name: "Ciclano", idade: 19 },
    { name: "Jhon Doe", idade: 30 },
  ];

  const [catFact, setCatFact] = useState([]);
  //   const [catFact2, setCatFact2] = useState();

  const fetchCatFacts = async () => {
    try {
      const { data } = await axios.get("https://catfact.ninja/fact");
      console.log(data);
      setCatFact([data]);
      //   const { data: info } = await axios.get("https://catfact.ninja/fact");
      //   setCatFact2(info.fact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Header name="Cat Facts" />
      </View>
      <List dataList={array} />
      {/* <Text>Facts{catFact?.length}</Text>

      <MyButton title="request" onPressButton={fetchCatFacts} />
      <Text style={{ marginTop: 20 }}>
        {catFact?.length ? (
          catFact.map((it, index) => {
            return (
              <View style={{ marginTop: 20 }}>
                <Text key={index}>{it}</Text>
              </View>
            );
          })
        ) : (
          <></>
        )}
      </Text> */}
      {/* <Card
        backgroundColor={style.colorChild}
        data={catFact}
        onPressButton={fetchCatFacts}
      /> */}
      {/* <Text>{catFact2 ? catFact2 : ""}</Text> */}
    </SafeAreaView>
  );
};

export default CatFacts;
