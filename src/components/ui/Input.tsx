import { StyleSheet, Text, TextInput, TextInputProps, TextProps } from "react-native";

type Props = {
  value: string;
  onChangeText: (v: string) => void;
  error?: string;
  errorProps?: TextProps;
  inputProps?: Omit<TextInputProps, "onChangeText" | "value">;
};

function Input(props: Props) {
  return (
    <>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
        {...props.inputProps}
      />
      {
        props.error && props.error.length
          ? (
            <Text
              style={styles.error}
              {...props.errorProps}
            >
              {props.error}
            </Text>
          )
          : null
      }
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderRadius: 6,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    color: "#00000",
    fontSize: 14,
  },
  error: {
    marginLeft: 16,
    marginTop: 10,
    fontSize: 14,
    color: "#FE4545",
  },
});

export { Input };
