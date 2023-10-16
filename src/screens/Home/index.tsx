import { Button } from "@components/Button";
import {
  YStack,
  XStack,
  Text,
  Avatar,
  Button as ButtonTamagui,
  Stack,
  ScrollView,
} from "tamagui";

import { Plus, Tag, ArrowRight } from "phosphor-react-native";
import { SearchInput } from "@components/SeachInput";

import { ProductCard } from "@components/ProductCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

const LINKIMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80";

const AVATAR_SIZE = 45;
export function HomeScreen() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleUserToProductDetail = () => {
    return navigation.navigate("productDetails");
  };

  return (
    <YStack f={1} bg="$gray_600" px="$4">
      <XStack mt={"$12"} jc="space-between">
        <XStack>
          <Avatar
            circular
            size={AVATAR_SIZE}
            borderWidth={2}
            borderColor="$blue_light"
          >
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc="red" />
          </Avatar>

          <YStack pl="$2">
            <Text color="$gray_100" fontFamily={"$body"} fontSize="$md">
              Boas Vindas,
            </Text>
            <Text
              color="$gray_100"
              fontWeight={"bold"}
              fontFamily={"$body"}
              fontSize="$md"
            >
              Maria!
            </Text>
          </YStack>
        </XStack>
        <Button
          icon={<Plus size={16} />}
          title="Criar anúncio"
          color="$gray_700"
          bg="$gray_100"
          w={179}
          h={42}
          fontSize="$sm"
        />
      </XStack>

      <YStack gap="$2">
        <Text color="$gray_300" fontFamily={"$body"} fontSize="$sm">
          Seus produtos anunciados para venda
        </Text>

        <XStack
          ai="center"
          p="$4"
          borderRadius={6}
          h={"$16"}
          jc="space-between"
          bg="$blue_light"
        >
          <XStack ai="center" gap="$3">
            <Tag size={22} color="#364D9D" />
            <YStack>
              <Text
                color="$gray_200"
                fontFamily={"$body"}
                fontSize="$xl"
                fontWeight={"700"}
              >
                4
              </Text>

              <Text color="$gray_200" fontFamily={"$body"} fontSize="$sm">
                anúncios ativos
              </Text>
            </YStack>
          </XStack>

          <Stack>
            <ButtonTamagui
              iconAfter={<ArrowRight color="#364D9D" />}
              h="$4"
              transparent
            >
              <Text
                color="$blue_dark"
                fontWeight={"700"}
                fontFamily="$body"
                fontSize={"$sm"}
              >
                Meus anúncios
              </Text>
            </ButtonTamagui>
          </Stack>
        </XStack>

        <Text color="$gray_300" fontFamily={"$body"} fontSize="$sm" mt="$4">
          Compre produtos variados
        </Text>

        <SearchInput />

        <ScrollView showsVerticalScrollIndicator={false} my="$2" mah={372}>
          <XStack
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
            mx="$2"
          >
            <ProductCard onPress={handleUserToProductDetail} />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </XStack>
        </ScrollView>
      </YStack>
    </YStack>
  );
}
