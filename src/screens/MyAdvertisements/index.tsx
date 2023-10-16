import { H2, YStack } from "tamagui";

export const MyAdvertisements = () => {
  return (
    <YStack f={1} px="$2" bg="$gray_600" ai="center" jc="center">
      <H2
        textAlign="center"
        color={"$gray_200"}
        fontSize="$2xl"
        fontWeight={"700"}
      >
        MyAdvertisements Screen
      </H2>
    </YStack>
  );
};
