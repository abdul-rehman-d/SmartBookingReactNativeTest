import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from "../screens";

export type AppStackParamList = {
  Screen1: undefined;
  Screen2: { numberOfLines: number };
}

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarColor: "transparent",
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen component={Screens.Screen1} name='Screen1' />
      <Stack.Screen component={Screens.Screen2} name='Screen2' />
    </Stack.Navigator>
  )
}

export default AppNavigator;
