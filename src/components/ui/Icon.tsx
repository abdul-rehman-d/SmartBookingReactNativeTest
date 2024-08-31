import {Image, StyleSheet} from 'react-native';
import { Icons } from '../../theme';

type Props = {
  icon: keyof typeof Icons;
  size?: number;
  color?: string;
};

function Icon({
  icon,
  size = 16,
  color = '',
}: Props) {
  const styleSize = { width: size, height: size };

  return (
    <Image
      source={Icons[icon]}
      style={[styles.icon, styleSize]}
      {...(color ? { tintColor: color } : {})}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
  },
});

export {Icon};
