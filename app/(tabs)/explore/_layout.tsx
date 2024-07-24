import { Stack } from "expo-router";

const Page = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Explore",
          headerLargeTitle: true,
          headerTitleStyle: { color: "#008080" },
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "rgb(242, 242,242)" },

          headerSearchBarOptions: {
            placeholder: "Search Movies",
          },
        }}
      />
    </Stack>
  );
};

export default Page;
