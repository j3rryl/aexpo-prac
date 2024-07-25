import { MovieProp } from "@/constants/sample";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  cardItem: MovieProp;
}
const GenreCard: React.FC<Props> = ({ cardItem }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: cardItem.thumbnail }} style={styles.cardImage} />
      {/* <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{cardItem.name}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardImage: {
    height: 75,
    width: 75,
    borderRadius: 999,
    borderColor: "#008080",
    borderWidth: 1.5,
  },
  cardBody: {
    paddingHorizontal: 5,
  },
  cardTitle: {
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 5,
    verticalAlign: "middle",
    fontSize: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "flex-start",
    backgroundColor: "rgba(0, 128, 128, 0.2)",
    color: "rgb(0, 128, 128)",
  },
});
export default GenreCard;
