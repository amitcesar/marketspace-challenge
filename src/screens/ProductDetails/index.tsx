import { YStack, XStack, Button as ButtonTamagui, Stack } from "tamagui";
import { ArrowLeft } from "phosphor-react-native";
import { ImageCarousel } from "@components/ImageCarousel";
export function ProductDetailsScreen() {
  return (
    <YStack f={1} bg="$gray_600">
      <XStack mt="$14" mx="$4">
        <ButtonTamagui
          iconAfter={<ArrowLeft size={24} color="#1A181B" />}
          transparent
        />
      </XStack>

      <ImageCarousel />
    </YStack>
  );
}
