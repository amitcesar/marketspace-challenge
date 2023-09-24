import { Button } from "@components/Button";

import { YStack, XStack, Text, Avatar, Stack } from "tamagui";
import { Plus } from "phosphor-react-native";

const AVATAR_SIZE = 50;
export function HomeScreen() {
  return (
    <YStack f={1} bg="$gray_600">
      <XStack mt={"$16"} jc="space-between" p="$4">
        <XStack>
          <Avatar circular size="$12" borderWidth={2} borderColor="$blue_light">
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc="red" />
          </Avatar>

          <YStack p="$2">
            <Text color="$gray_100">Boas Vindas,</Text>
            <Text color="$gray_100" fontWeight={"bold"}>
              Maria!
            </Text>
          </YStack>
        </XStack>

        <Button
          icon={<Plus size={16} />}
          title="Criar anúncio"
          color="$white"
          bg="$gray_100"
          w={179}
          h={42}
        />
      </XStack>
    </YStack>
  );
}
