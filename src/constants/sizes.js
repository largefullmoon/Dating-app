import {Dimensions} from 'react-native'

const { width } = Dimensions.get("screen");

const sizes = {
  width: width * 0.8,
  fullWidth: width,
  margin: 8,
  buttonHeight:42,
  buttonText:20,
};

export default sizes;