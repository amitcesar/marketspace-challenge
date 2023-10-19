import { XStack, Button as ButtonTamagui } from "tamagui";

import { ArrowLeft } from "phosphor-react-native";

export const HeaderWithBackButton = () => {
  return (
    <XStack mt="$12" mx="$4">
      <ButtonTamagui
        iconAfter={<ArrowLeft size={24} color="#1A181B" />}
        transparent
      />
    </XStack>
  );
};
