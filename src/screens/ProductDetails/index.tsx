import {
  YStack,
  XStack,
  Button as ButtonTamagui,
  Avatar,
  Text,
  Heading,
  ScrollView,
  Stack,
} from "tamagui";
import {
  ArrowLeft,
  Barcode,
  QrCode,
  Money,
  CreditCard,
  Bank,
  WhatsappLogo,
} from "phosphor-react-native";
import { ImageCarousel } from "@components/ImageCarousel";
import { Button } from "@components/Button";
import { HeaderWithBackButton } from "@components/HeaderWithBackButton";
import { Tag } from "@components/Tag";

/*
  <Text
            fontFamily={"$body"}
            fontSize="$2xs"
            p="$1"
            borderRadius={12}
            backgroundColor="$gray_200"
            fontWeight={"600"}
            alignSelf="flex-start"
            mt="$6"
          >
            USADO
          </Text>
*/

/*

    <Avatar
              circular
              size="$6"
              borderWidth={2}
              borderColor="$blue_light"
            >
              <Avatar.Image src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Avatar.Fallback bc="$gray_600" />
            </Avatar>
*/
export function ProductDetailsScreen() {
  return (
    <YStack f={1} bg="$gray_600">
      <HeaderWithBackButton />

      <ImageCarousel />
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack mx="$6" mt="$4" f={1}>
          <XStack>
            <Avatar
              circular
              size="$6"
              borderWidth={2}
              borderColor="$blue_light"
            >
              <Avatar.Image src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Avatar.Fallback bc="$gray_600" />
            </Avatar>

            <Text
              fontFamily={"$body"}
              fontSize={"$md"}
              color="$gray_100"
              pl="$2"
            >
              Erick Ray
            </Text>
          </XStack>

          <Stack alignSelf="flex-start" mt="$6">
            <Tag label="novo" />
          </Stack>

          <YStack mt="$2">
            <XStack jc="space-between">
              <Heading color="$gray_100" fontSize={"$xl"} fontWeight={"700"}>
                Bicicleta
              </Heading>
              <XStack ai="center" space="$1">
                <Heading
                  fontSize={"$md"}
                  color="$blue_light"
                  fontWeight={"700"}
                >
                  R$
                </Heading>
                <Heading
                  color="$blue_light"
                  fontSize={"$xl"}
                  fontWeight={"700"}
                >
                  120,00
                </Heading>
              </XStack>
            </XStack>

            <Text
              fontSize={"$sm"}
              fontFamily={"$body"}
              color="$gray_200"
              mt="$3"
            >
              Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
              Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
              nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus
              iaculis in aliquam.
            </Text>

            <XStack mt="$3">
              <Text
                fontSize={"$sm"}
                fontFamily={"$body"}
                color="$gray_200"
                fontWeight={"700"}
              >
                Aceita troca?
              </Text>
              <Text
                fontSize={"$sm"}
                fontFamily={"$body"}
                color="$gray_200"
                pl="$2"
              >
                Sim
              </Text>
            </XStack>

            <YStack mt="$4">
              <Heading
                fontSize={"$sm"}
                fontFamily={"$body"}
                color="$gray_200"
                fontWeight={"700"}
              >
                Meios de pagamento
              </Heading>

              <XStack gap="$2" pt="$2">
                <Barcode size={18} color="#1A181B" />
                <Text color="$gray_200" fontSize={"$sm"} fontFamily={"$body"}>
                  Boleto
                </Text>
              </XStack>
              <XStack gap="$2" pt="$2">
                <QrCode size={18} color="#1A181B" />
                <Text color="$gray_200" fontSize={"$sm"} fontFamily={"$body"}>
                  Pix
                </Text>
              </XStack>
              <XStack gap="$2" pt="$2">
                <Money size={18} color="#1A181B" />
                <Text color="$gray_200" fontSize={"$sm"} fontFamily={"$body"}>
                  Dinheiro
                </Text>
              </XStack>
              <XStack gap="$2" pt="$2">
                <CreditCard size={18} color="#1A181B" />
                <Text color="$gray_200" fontSize={"$sm"} fontFamily={"$body"}>
                  Cartão de Crédito
                </Text>
              </XStack>
              <XStack gap="$2" pt="$2">
                <Bank size={18} color="#1A181B" />
                <Text color="$gray_200" fontSize={"$sm"} fontFamily={"$body"}>
                  Depósito Bancário
                </Text>
              </XStack>
            </YStack>
          </YStack>
        </YStack>

        <Stack>
          <XStack
            ai="center"
            jc="space-between"
            pb="$8"
            mt="$6"
            bg="$gray_700"
            p="$6"
            borderRadius={6}
          >
            <XStack jc="space-between">
              <XStack ai="center" space="$1">
                <Heading
                  fontSize={"$md"}
                  color="$blue_light"
                  fontWeight={"700"}
                >
                  R$
                </Heading>
                <Heading
                  color="$blue_light"
                  fontSize={"$3xl"}
                  fontWeight={"700"}
                >
                  120,00
                </Heading>
              </XStack>
            </XStack>

            <Button
              mb={0}
              title="Entrar em contato"
              color="$gray_700"
              bg="$blue_light"
              icon={<WhatsappLogo size={16} />}
              maw={180}
              p="$2"
            />
          </XStack>
        </Stack>
      </ScrollView>
    </YStack>
  );
}
