import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { XStack, YStack, Avatar, Text, Image } from "tamagui";
const LINKIMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80";

export function ProductCard({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <YStack mb="$3">
        <XStack
          jc="space-between"
          ai="center"
          p="$1"
          position="absolute"
          w={153.5}
          maw={153.5}
          mah={143}
        >
          <Avatar circular size={"$6"} borderWidth={1} borderColor="white">
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc="red" />
          </Avatar>

          <Text
            fontFamily={"$body"}
            fontSize="$2xs"
            p="$1"
            borderRadius={12}
            backgroundColor="$gray_200"
            fontWeight={"600"}
          >
            USADO
          </Text>
        </XStack>

        <YStack zIndex={-1} space="$1">
          <Image
            source={{
              width: 153,
              height: 100,
              uri: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
            }}
            width="100%"
            height="100%"
            borderRadius={6}
          />

          <Text color="$gray_200" fontFamily={"$body"} fontSize="$sm">
            Relogio maneiro
          </Text>
          <Text color="$gray_100" fontWeight={"700"} fontSize="$md">
            R$ 59,90
          </Text>
        </YStack>
      </YStack>
    </TouchableOpacity>
  );
}
