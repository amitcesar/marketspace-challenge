import { YStack, Text, XStack } from "tamagui";
import { ScreenHeader } from "./components/ScreenHeader";
import { Select } from "@components/Select";

export const MyAdvertisements = () => {
  return (
    <YStack f={1} px="$4" bg="$gray_600" fullscreen>
      <ScreenHeader />
      <XStack mt="$6" jc="space-between" ai="center">
        <Text color="$gray_200" fontSize={"$sm"}>
          9 anúncios
        </Text>

        <Select />
      </XStack>
    </YStack>
  );
};
