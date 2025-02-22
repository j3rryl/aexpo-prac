import { MovieProp } from "@/constants/sample";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  cardItem: MovieProp;
}
const CardItem: React.FC<Props> = ({ cardItem }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: cardItem.thumbnail }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{cardItem.name}</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          minus rerum incidunt mollitia nemo aliquid. Cumque eligendi cum
          mollitia sed dignissimos cupiditate, eos illum incidunt, molestias
          numquam, qui quia accusamus?
        </Text>
        <Text style={styles.cardGenre}>{cardItem.genre}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontWeight: "700",
  },
  cardGenre: {
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 5,
    verticalAlign: "middle",
    fontSize: 12,
    borderRadius: 8,
    width: "20%",
    marginVertical: 10,
    backgroundColor: "rgba(0, 128, 128,0.2)",
    color: "rgb(0, 128, 128)",
  },
});
export default CardItem;
