import { useHeaderHeight } from "@react-navigation/elements";
import { View, Text } from "react-native";
const Page = () => {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{ paddingTop: headerHeight }}>
      <Text>Hello</Text>
    </View>
  );
};

export default Page;
