import { YStack, H1, XStack, Button as ButtonTamagui } from "tamagui";
import { ArrowLeft } from "phosphor-react-native";
export function ProductDetailsScreen() {
  return (
    <YStack f={1} bg="$gray_600" px="$4">
      <XStack mt="$12">
        <ButtonTamagui
          iconAfter={<ArrowLeft size={24} color="#1A181B" />}
          transparent
        />
      </XStack>
    </YStack>
  );
}
