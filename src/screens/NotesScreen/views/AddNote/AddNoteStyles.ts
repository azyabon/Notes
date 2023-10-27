import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  AddNote: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    zIndex: 99,
  },

  AddNote__plus: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '400',
    color: colors.white,
  },
});
