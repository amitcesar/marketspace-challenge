import { YStack, XStack, Text, Heading, ScrollView, Stack } from "tamagui";
import {
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
import { UserAvatar } from "@components/UserAvatar";

export function ProductDetailsScreen() {
  return (
    <YStack f={1} bg="$gray_600">
      <HeaderWithBackButton />

      <ImageCarousel />
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack mx="$6" mt="$4" f={1}>
          <UserAvatar name="Erick Ray" />

          <Stack alignSelf="flex-start" mt="$4">
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
              pt="$2"
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

            <YStack mt="$3">
              <Heading
                fontSize={"$sm"}
                fontFamily={"$body"}
                color="$gray_200"
                fontWeight={"700"}
              >
                Meios de pagamento
              </Heading>

              <XStack pt="$2" gap="$2">
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

        <Stack mt="$2">
          <XStack
            bg="$gray_700"
            ai="center"
            jc="space-between"
            p="$6"
            borderRadius={6}
          >
            <XStack jc="space-between">
              <XStack ai="center" space="$1">
                <Heading fontSize={"$md"} color="$blue_dark" fontWeight={"700"}>
                  R$
                </Heading>
                <Heading
                  color="$blue_dark"
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
              fontSize={"$sm"}
            />
          </XStack>
        </Stack>
      </ScrollView>
    </YStack>
  );
}
