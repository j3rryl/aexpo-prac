import CardItem from "@/components/CardItem";
import { sample } from "@/constants/sample";
import { ScrollView, Text, View } from "react-native";

const Page = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {sample.map((item, i) => (
        <CardItem key={i} cardItem={item} />
      ))}
    </ScrollView>
  );
};

export default Page;
