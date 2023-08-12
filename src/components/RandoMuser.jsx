import axios from "axios";
import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

const RandoMuser = () => {
  const [rando, setRando] = useState();
  const [newReq, setNewReq] = useState(false);

  const fetchRandoMuserData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/");

      setRando(data.results);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("chaou");
    fetchRandoMuserData();
  }, [newReq]);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#ccc", marginTop: 0, padding: 20 }}>
        {rando?.length ? (
          rando.map((it) => (
            <>
              <Text>Nome: {it.name.last}</Text>
              <Text>Email: {it.email}</Text>
              <Text>Genero: {it.gender}</Text>
              <Text>Celular: {it.cell}</Text>
              <Text>Cidade: {it.location.city}</Text>
              <Text>Idade: {it.registered.age}</Text>
            </>
          ))
        ) : (
          <></>
        )}
      </View>
      <View>
        <Button title="Request" onPress={() => setNewReq(!newReq)}></Button>
      </View>
    </SafeAreaView>
  );
};

export default RandoMuser;
