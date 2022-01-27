import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  spaces: {
    space1: 4,
    space2: 8,
    space3: 12,
    space4: 16,
    space5: 20,
    space6: 24,
    space7: 28,
    space8: 32,
  },
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
