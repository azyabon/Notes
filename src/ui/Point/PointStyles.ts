import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  Point: {
    flexDirection: 'column',
    width: '100%',
    gap: 6,
  },

  Point__title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '500',
    textAlign: 'left',
  },
});
