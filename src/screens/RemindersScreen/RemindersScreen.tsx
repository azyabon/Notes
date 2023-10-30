import React, {useState} from 'react';
import TopBar from '../../shared/TopBar';
import {RefreshControl, ScrollView, Text, View} from 'react-native';

import {styles} from '../StatsScreen/StatsScreenStyles';
import PlusIcon from '../../icons/PlusIcon';
import EmptyScreen from '../../shared/EmptyScreen';

export default function RemindersScreen() {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.StatsScreen}>
      <TopBar
        title={'REMINDERS'}
        rightIcon={<PlusIcon />}
        onRightIconClick={() => console.log(1)}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 2000);
            }}
          />
        }
        contentContainerStyle={styles.StatsScreen__content}>
        <Text>1</Text>
      </ScrollView>
      <EmptyScreen isShow={false} label={'No reminders'} />
    </View>
  );
}
