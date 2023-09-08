import {
  Text,
  GestureResponderEvent,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

import PressArea from "../atoms/PressArea";
import { colors, fonts } from "../../theme";

type TextButtonType = {
  children: string;
  textStyle?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

const TextButton = ({ children, textStyle, onPress }: TextButtonType) => {
  return (
    <PressArea onPress={onPress} style={styles.button}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </PressArea>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },

  text: {
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",

    color: colors.background,
    fontFamily: fonts.secondary[400],
    fontSize: 24,
  },
});

export default TextButton;
