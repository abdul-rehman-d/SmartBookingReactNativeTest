import { Pressable, PressableProps, StyleSheet, Text, TextProps } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
  buttonProps?: Omit<PressableProps, "onPress">
  textProps?: TextProps,
};

function Button({
  text,
  onPress,
  buttonProps = {},
  textProps = {},
}: Props) {
  return (
    <Pressable
      style={[styles.pressable]}
      onPress={onPress}
      {...buttonProps}
    >
      <Text style={styles.text} {...textProps}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    padding: 16,
    borderRadius: 50,
    borderColor: "#9C9C9C",
    borderWidth: 2,
  },
  text: {
    color: "#4F4F4F",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export { Button };
