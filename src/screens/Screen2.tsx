import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { AppStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<AppStackParamList, "Screen1">;

function Screen2(): React.JSX.Element {
    return (
        <Text>Screen2</Text>
    )
}

export { Screen2 };
