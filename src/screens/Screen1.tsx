import React, {useCallback, useReducer, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {AppStackParamList} from '../navigation/AppNavigator';
import {AnimatedHeader} from '../components/AnimatedHeader';
import {Input, Button} from '../components/ui';

type Props = NativeStackScreenProps<AppStackParamList, 'Screen1'>;

function Screen1({navigation}: Props): React.JSX.Element {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onChangeText = useCallback(
    (value: string) => {
      setValue(value);
    },
    [setValue],
  );

  const onNext = useCallback(() => {
    if (!value) {
      setError('Number of lines is required.');
      return;
    }

    let intValue: number;
    try {
      intValue = parseInt(value);
    } catch (e) {
      setError('Number of lines can only be integer.');
      return;
    }

    if (intValue <= 3) {
      setError('Number of lines need be greater than 3.');
      return;
    }

    setError('');
    setValue('');

    navigation.navigate('Screen2', {numberOfLines: intValue});
  }, [value, setError, setValue, navigation]);

  return (
    <View style={styles.container}>
      <AnimatedHeader height={50} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.heading}>Screen 1</Text>
          <Input
            value={value}
            onChangeText={onChangeText}
            error={error}
            inputProps={{
              keyboardType: 'number-pad',
              placeholder: 'Number of lines',
            }}
          />
        </View>
        <View>
          <Button text="Go to Screen 2" onPress={onNext} />
        </View>
      </View>
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

export {Screen1};
