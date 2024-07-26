import CardItem from "@/components/CardItem";
import GenreCard from "@/components/GenreCard";
import ImageCard from "@/components/ImageCard";
import { MovieProp, sample } from "@/constants/sample";
import { Link } from "expo-router";
import {
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const Page = () => {
  const renderItem: ListRenderItem<MovieProp> = ({ item }) => (
    <ImageCard cardItem={item as MovieProp} />
  );

  return (
    <ScrollView horizontal={false} style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Genres</Text>
        <Link href="/(modals)/booking" style={styles.cardLink}>
          See all
        </Link>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sample.slice(0, 10).map((item) => (
          <GenreCard key={item.name} cardItem={item} />
        ))}
      </ScrollView>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Movies</Text>
        <Link href="/(modals)/booking" style={styles.cardLink}>
          See all
        </Link>
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={sample.slice(0, 6)}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },
  cardTitle: {
    fontWeight: "700",
  },
  cardLink: {
    color: "#008080",
    fontWeight: "700",
  },
});
//Hello
export default Page;
