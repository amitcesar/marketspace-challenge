import { useMemo, useRef } from "react";
import { Button } from "@components/Button";
import {
  H2,
  YStack,
  Text,
  XStack,
  Button as ButtonTamagui,
  Switch,
  Stack,
  Checkbox,
  Label,
} from "tamagui";
import BottomSheet from "@gorhom/bottom-sheet";
import { X, Check } from "phosphor-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PaymentOptions } from "@components/PaymentOptions";

const GRAY_400 = "#9F9BA1";
export const MyAdvertisements = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, "70%"], []);

  return (
    <YStack f={1} px="$2" bg="$gray_600" ai="center" jc="center">
      <H2
        textAlign="center"
        color={"$gray_200"}
        fontSize="$2xl"
        fontWeight={"700"}
      >
        MyAdvertisements Screen
      </H2>

      <Button
        title="opensheet"
        color="$gray_600"
        backgroundColor={"$blue_dark"}
        onPress={() => {
          bottomSheetRef.current?.expand();
        }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
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
        </YStack>
      </BottomSheet>
    </YStack>
  );
};
