import { TouchableOpacity } from "react-native";
import { useMemo, useRef } from "react";
import { XStack } from "tamagui";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Input } from "@components/Input";

export function SearchInput() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, "75%"], []);

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
      <XStack alignItems="center" gap="$2">
        <TouchableOpacity>
          <MagnifyingGlass size={20} color="#3E3A40" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Sliders size={20} color="#3E3A40" />
        </TouchableOpacity>
      </XStack>
    </XStack>
  );
}
