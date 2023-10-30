import { Tag } from "@components/Tag";
import { UserAvatar } from "@components/UserAvatar";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { XStack, YStack, Text, Image } from "tamagui";

type ProductCardProps = TouchableOpacityProps & {
  havePhoto?: boolean;
};

export function ProductCard({ havePhoto = true, ...rest }: ProductCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <YStack mb="$3" mt="$2">
        <XStack
          jc={havePhoto ? "space-between" : "flex-end"}
          ai="center"
          p="$1"
          position="absolute"
          w={153.5}
          maw={153.5}
          mah={143}
        >
          {havePhoto ? (
            <UserAvatar borderColor={"white"} borderWidth={1} />
          ) : (
            <></>
          )}

          <Tag label="usado" />
        </XStack>

        <YStack zIndex={-1}>
          <Image
            source={{
              width: 153,
              height: 100,
              uri: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            borderRadius={6}
          />

          <Text color="$gray_200" fontFamily={"$body"} fontSize="$sm" pt="$1">
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
