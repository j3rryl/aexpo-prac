import { Link } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  return (
    <View>
      <Text>Index Page</Text>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/listing/123"}>Listing</Link>
      <Link href={"/(modals)/booking"}>booking</Link>
    </View>
  );
};

export default Page;
