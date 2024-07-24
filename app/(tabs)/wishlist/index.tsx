import { ScrollView, Text, View } from "react-native";

const Page = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {Array.from({ length: 100 }).map((_, i) => (
        <View key={i}>
          <Text>{i}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Page;
