import {View, Dimensions} from 'react-native';

type Props = {
  height: number;
};

const screenHeight = Dimensions.get('window').height;

function AnimatedHeader({height}: Props) {
  return (
    <View
      style={{
        height: screenHeight * (height / 100),
        backgroundColor: '#00C7BE',
      }}
    />
  );
}

export {AnimatedHeader};
