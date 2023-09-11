import { TextInput, View, StyleSheet } from "react-native";

import { colors, fonts } from "../../theme";

type InputType = {
  children?: any;
  placeholder?: string;
  config?: any;
};

const Input = ({ children, placeholder, config }: InputType) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} {...config} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginVertical: 8,

    borderWidth: 2,
    borderColor: colors.font.light + "aa",
    borderRadius: 4,
  },

  input: {
    fontSize: 18,
    fontFamily: fonts.secondary[400],
    textAlignVertical: "center",
  },
});

export default Input;
