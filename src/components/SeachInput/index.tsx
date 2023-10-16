import { Input } from "@components/Input";
import {
  XStack,
  Button as ButtonTamagui,
  Separator,
  Paragraph,
  Text,
} from "tamagui";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";

export function SearchInput() {
  return (
    <XStack
      h={45}
      ai="center"
      jc="space-between"
      space="$2"
      borderRadius={6}
      bg="$white"
      pr="$4"
    >
      <Input
        bg="$white"
        borderWidth={0}
        placeholder="Buscar Anuńcio"
        placeholderTextColor={"$gray_600"}
        w={279}
      />

      <XStack alignItems="center">
        <ButtonTamagui
          iconAfter={<MagnifyingGlass size={20} color="#3E3A40" />}
          transparent
        />
        <Text color={"$gray_400"}>|</Text>
        <ButtonTamagui
          iconAfter={<Sliders size={20} color="#3E3A40" />}
          transparent
        />
      </XStack>
    </XStack>
  );
}
