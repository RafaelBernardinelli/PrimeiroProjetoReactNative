import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const style = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
});

const Card = ({ onPressButton, backgroundColor, data }) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={[style.card, backgroundColor]}>
        <View>
          {data?.length ? (
            data.map((it) => (
              <>
                <Text>{it.fact}</Text>
                <Text>{it.length}</Text>
              </>
            ))
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
