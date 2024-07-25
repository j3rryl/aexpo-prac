import CardItem from "@/components/CardItem";
import { MovieProp, sample } from "@/constants/sample";
import { FlatList, ListRenderItem, View } from "react-native";

const Page = () => {
  const renderItem: ListRenderItem<MovieProp> = ({ item }) => (
    <CardItem cardItem={item as MovieProp} />
  );
  return (
    <View>
      <FlatList
        data={sample}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Page;
