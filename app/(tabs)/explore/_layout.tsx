import { Stack } from "expo-router";

const Page = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Explore",
          headerBlurEffect: "regular",
          headerTransparent: true,
          headerSearchBarOptions: {
            placeholder: "Search Movies",
          },
        }}
      />
    </Stack>
  );
};

export default Page;
