

import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes } from '@tamagui/themes'
import { createTamagui, createFont, createTokens } from 'tamagui'


const KarlaFont = createFont({
  family: 'Karla',
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,

  },
  weight: {
    4: '300',
    6: '600',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
  face: {
    700: { normal: 'KarlaBold',  },
  },
})



const size = {
  0: 0,
  1: 4,
  true: 4,
  2: 8
};

const space = {
  ...size,
  '-0': -0,
  '-1': -5,
  '-2': -10 
};

 export const tokens = createTokens({
  size,
  space,
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    blue_dark: '#364D9D',
    blue_light: '#647AC7',
    red_light: '#EE7979',

    white: '#fff',
    black: '#000',
    gray_100: '#1A181B',
    gray_200: '#3E3A40',
    gray_300: '#5F5B62',
    gray_400: '#9F9BA1',
    gray_500: '#D9D8DA',
    gray_600: '#EDECEE',
    gray_700: '#F7F7F8'
  },
})


const config = createTamagui({
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: KarlaFont,
    body: KarlaFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),

  radius: {
    0: 0,
    1: 3,
    2: 5,
    3: 10,
    4: 15,
    5: 20
  },

})

export type AppConfig = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default config