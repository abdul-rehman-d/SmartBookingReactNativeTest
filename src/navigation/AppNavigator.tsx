import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from "../screens";

export type AppStackParamList = {
  Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Screens.HomeScreen} name='Home' />
    </Stack.Navigator>
  )
}

export default AppNavigator;
