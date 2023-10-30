import { TouchableOpacity } from "react-native";
import { YStack, Text, XStack } from "tamagui";
import { Plus } from "phosphor-react-native";

const GRAY_100 = "#1A181B";
export const ScreenHeader = () => {
  return (
    <XStack mt="$12" ai="center" jc="flex-end">
      <Text
        fontSize={"$xl"}
        fontWeight={"bold"}
        fontFamily={"$body"}
        color="$gray_100"
        textAlign="center"
      >
        Meus anúncios
      </Text>

      <XStack ai="center" jc="flex-end" w={120} maw={120}>
        <TouchableOpacity>
          <Plus color={GRAY_100} size={24} />
        </TouchableOpacity>
      </XStack>
    </XStack>
  );
};
