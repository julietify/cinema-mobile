import { CardStyleInterpolators } from "@react-navigation/stack"

export const screenConfig = {
  profile: {
    header: () => null,
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
  },
  film: {
    header: () => null,
    CardStyleInterpolators: CardStyleInterpolators.forNoAnimation
  }
}