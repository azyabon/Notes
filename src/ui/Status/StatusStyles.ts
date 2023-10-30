import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  Status: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    backgroundColor: colors.dark,
  },

  Status__text: {
    fontSize: 12,
    fontWeight: '700',
  },
});
