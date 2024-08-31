import {Dimensions, StyleSheet, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

import {Icon} from './ui';

type Props = {
  height: number;
};

const screenHeight = Dimensions.get('window').height;

function AnimatedHeader({height}: Props) {
  const styleHeight = {height: screenHeight * (height / 100)};

  return (
    <Animated.View
      style={[styles.header, styleHeight]}
      sharedTransitionTag="tag">
      <SafeAreaView style={styles.innerContainer}>
        <BackButton />
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00C7BE',
  },
  innerContainer: {
    paddingHorizontal: 20,
  }
});

function BackButton() {
  const navigation = useNavigation();

  function onPress() {
    navigation.goBack();
  }

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Pressable onPress={onPress}>
      <Icon icon="back_arrow" color="#fff" />
    </Pressable>
  );
}

export {AnimatedHeader};
