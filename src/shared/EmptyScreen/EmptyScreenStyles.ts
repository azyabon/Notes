import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  EmptyScreen: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },

  EmptyScreen__label: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
});
