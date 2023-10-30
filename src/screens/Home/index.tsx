import { useMemo, useRef } from "react";
import { Button } from "@components/Button";
import {
  YStack,
  XStack,
  Text,
  Avatar,
  Button as ButtonTamagui,
  Stack,
  ScrollView,
  Switch,
} from "tamagui";

import {
  Plus,
  Tag,
  ArrowRight,
  X,
  MagnifyingGlass,
  Sliders,
} from "phosphor-react-native";

import { ProductCard } from "@components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BottomSheet from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native";
import { PaymentOptions } from "@components/PaymentOptions";
import { Input } from "@components/Input";

const AVATAR_SIZE = 45;
const GRAY_400 = "#9F9BA1";

export function HomeScreen() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const handleUserToProductDetail = () => {
    return navigation.navigate("productDetails");
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, "68%"], []);

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

            <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
              <Sliders size={20} color="#3E3A40" />
            </TouchableOpacity>
          </XStack>
        </XStack>

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

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "#EDECEE" }}
        handleIndicatorStyle={{ backgroundColor: GRAY_400 }}
      >
        <YStack f={1} px="$4">
          <XStack ai={"center"} jc="space-between" pt="$12">
            <Text
              fontWeight={"700"}
              fontFamily={"$body"}
              fontSize={"$xl"}
              color="$gray_100"
            >
              Filtrar anúncios
            </Text>

            <ButtonTamagui
              icon={<X color={GRAY_400} size={24} />}
              transparent
            />
          </XStack>

          <Text
            fontFamily={"$body"}
            fontWeight={"700"}
            color="$gray_200"
            mt="$4"
          >
            Condição
          </Text>
          <XStack mt={"$4"} space="$2">
            <TouchableOpacity>
              <Text
                fontFamily={"$body"}
                fontSize="$xs"
                borderRadius={50}
                backgroundColor={"$gray_500"}
                fontWeight={"700"}
                color="$gray_300"
                pt={6}
                pb={6}
                pl={12}
                pr={12}
              >
                NOVO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                fontFamily={"$body"}
                fontSize="$xs"
                borderRadius={50}
                backgroundColor={"$gray_500"}
                fontWeight={"700"}
                color="$gray_300"
                pt={6}
                pb={6}
                pl={12}
                pr={12}
              >
                USADO
              </Text>
            </TouchableOpacity>
          </XStack>

          <Text
            fontFamily={"$body"}
            fontWeight={"bold"}
            color="$gray_200"
            mt="$5"
          >
            Aceita troca?
          </Text>

          <Switch backgroundColor={"$gray_500"} size="$10" mt="$3">
            <Switch.Thumb animation="bouncy" />
          </Switch>

          <Stack>
            <Text
              fontFamily={"$body"}
              fontWeight={"bold"}
              color="$gray_200"
              mt="$5"
            >
              Meios de pagamentos aceitos
            </Text>

            <PaymentOptions />
          </Stack>

          <XStack mt={"$10"} jc="space-between">
            <Button
              maw={170}
              title="Resetar filtros"
              color="$gray_200"
              bg="$gray_500"
            />
            <Button
              maw={170}
              title="Aplicar filtros"
              color="$white"
              bg="$gray_100"
            />
          </XStack>
        </YStack>
      </BottomSheet>
    </YStack>
  );
}
