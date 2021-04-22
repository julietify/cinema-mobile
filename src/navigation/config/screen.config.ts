import { CardStyleInterpolators } from "@react-navigation/stack"

export const screenConfig = {
  profile: {
    header: () => null,
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
  },
  film: {
    header: () => null,
    CardStyleInterpolators: CardStyleInterpolators.forNoAnimation
  },
  trailers: {
    header: () => null,
    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
  },
  trailer: {
    header: () => null,
    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
  },
  ticket: {
    header: () => null,
    CardStyleInterpolators: CardStyleInterpolators.forNoAnimation
  }

}