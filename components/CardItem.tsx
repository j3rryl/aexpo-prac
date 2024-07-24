import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CardItemProp = {
  name: string;
  genre: string;
  thumbnail: string;
};
interface Props {
  cardItem: CardItemProp;
}
const CardItem: React.FC<Props> = ({ cardItem }) => {
  return (
    <View style={styles.card}>
      <Text>{cardItem.name}</Text>
      <Text>{cardItem.genre}</Text>
      <Text>{cardItem.thumbnail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
});
export default CardItem;
