import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {AppStackParamList} from '../navigation/AppNavigator';
import {AnimatedHeader} from '../components/AnimatedHeader';
import BottomSheet from '../components/BottomSheet';

type Props = NativeStackScreenProps<AppStackParamList, 'Screen2'>;

function Screen2({navigation, route}: Props): React.JSX.Element {
  const {numberOfLines} = route.params;
  return (
    <View style={styles.container}>
      <AnimatedHeader height={20} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Screen 2</Text>
      </View>
      <BottomSheet numberOfLines={numberOfLines} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  heading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export {Screen2};
