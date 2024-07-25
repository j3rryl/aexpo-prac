import { MovieProp } from "@/constants/sample";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  cardItem: MovieProp;
}
const ImageCard: React.FC<Props> = ({ cardItem }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: cardItem.thumbnail }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{cardItem.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
    width: "50%",
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 5,
  },
  cardTitle: {
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 5,
    verticalAlign: "middle",
    fontSize: 12,
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    marginVertical: 10,
    backgroundColor: "rgba(0, 128, 128, 0.2)",
    color: "rgb(0, 128, 128)",
  },
});
export default ImageCard;
