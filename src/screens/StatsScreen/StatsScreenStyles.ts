import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  StatsScreen: {
    flex: 1,
    backgroundColor: colors.lightDark,
  },

  StatsScreen__content: {
    padding: 20,
    gap: 20,
  },

  StatsScreen__points: {
    gap: 8,
  },

  StatsScreen__point: {
    color: colors.white,
    fontSize: 14,
  },

  StatsScreen__graphs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 20,
  },
});
