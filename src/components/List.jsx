import { Text, View } from "react-native";

const List = ({ dataList }) => {
  return (
    <View>
      {dataList.map((it) => (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Nome: {it.idade} </Text>
          <Text> Idade: {it.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;
