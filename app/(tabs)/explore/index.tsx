import CardItem from "@/components/CardItem";
import { MovieProp, sample } from "@/constants/sample";
import { FlatList, ListRenderItem, ScrollView } from "react-native";
const Page = () => {
  const renderItem: ListRenderItem<MovieProp> = ({ item }) => (
    <CardItem cardItem={item as MovieProp} />
  );
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FlatList
        data={sample}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
      {/* {sample.map((item, i) => (
        <CardItem key={i} cardItem={item} />
      ))} */}
    </ScrollView>
  );
};

export default Page;
