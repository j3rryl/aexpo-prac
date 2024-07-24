import { Stack } from "expo-router";

const Page = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Wishlist",
          headerLargeTitle: true,
          headerTitleStyle: { color: "#008080" },
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "rgb(242, 242,242)" },
        }}
      />
    </Stack>
  );
};

export default Page;
