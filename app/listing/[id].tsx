import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(`Page is this ${id}`);

  return (
    <View>
      <Text>Page {id}</Text>
    </View>
  );
};

export default Page;
