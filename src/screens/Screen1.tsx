import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { AppStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<AppStackParamList, "Screen1">;

function Screen1({ navigation }: Props): React.JSX.Element {

    return (
        <View style={{ marginTop: "auto" }}>
            <Text>Screen1</Text>
            <Button
                title="Go To Screen 2"
                onPress={() => {
                    navigation.navigate("Screen2", { numberOfLines: 10 })
                }}
            />
        </View>
    )
}

export { Screen1 };
