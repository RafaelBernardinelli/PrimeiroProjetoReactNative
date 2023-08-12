import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";

const Universities = () => {
  const [listUniversities, setListUniversities] = useState();

  const getUniversitiesInfos = async () => {
    try {
      const { data } = await axios.get(
        "http://universities.hipolabs.com/search?country=Brazil"
      );
      setListUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUniversitiesInfos();
  }, []);

  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Header name="Universities" />
      </View>
      <ScrollView style={{ margin: 10 }}>
        {listUniversities?.length ? (
          listUniversities.map((it, index) => (
            <View
              style={{ backgroundColor: "#ccc", marginBottom: 10, padding: 10 }}
            >
              <Text>
                {index} = Name: {it.name}
              </Text>
              <Text>URL: {it.web_pages}</Text>
            </View>
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Universities;
