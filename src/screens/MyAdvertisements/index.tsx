import { useMemo, useRef } from "react";
import { Button } from "@components/Button";
import { H2, YStack } from "tamagui";
import BottomSheet from "@gorhom/bottom-sheet";

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

      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <YStack f={1} px="$2" bg="$gray_600" ai="center" jc="center">
          <H2
            textAlign="center"
            color={"$gray_200"}
            fontSize="$2xl"
            fontWeight={"700"}
          >
            Modalzada
          </H2>
        </YStack>
      </BottomSheet>
    </YStack>
  );
};
