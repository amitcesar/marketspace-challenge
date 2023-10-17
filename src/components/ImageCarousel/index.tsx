import {
  YStack,
  XStack,
  Stack,
  Button as ButtonTamagui,
  Image,
  ScrollView,
  Text,
} from "tamagui";

import { Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import { useRef, useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
//   "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
// ];

export const ImageCarousel = () => {
  const dataImages = [
    {
      id: "01",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "02",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      id: "03",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const [isPagingEnabled, setIsPagingEnabled] = useState(true);

  const width = Dimensions.get("window").width;
  const carouselRef = useRef<ICarouselInstance>(null);
  return (
    <Stack mt="$7" ai="center" jc="center">
      <Carousel
        ref={carouselRef}
        loop
        width={width}
        height={width}
        autoPlay={false}
        data={dataImages}
        scrollAnimationDuration={1000}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index, item }) => (
          <YStack>
            <Image
              key={index}
              source={{
                width: width,
                height: 280,
                uri: item.image,
              }}
            />
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              <Stack
                bg="$gray_700"
                f={1}
                w={width}
                ai="center"
                jc="center"
                alignContent="center"
              >
                <Text>{""}</Text>
              </Stack>
            </ScrollView>
          </YStack>
        )}
      />
    </Stack>
  );
};
