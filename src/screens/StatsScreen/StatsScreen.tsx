import React, {useState} from 'react';
import TopBar from '../../shared/TopBar';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import RadialGraph from '../../ui/RadialGraph';
import {colors} from '../../styles/colors';
import {getNoteLabelByStatus} from '../../utils/getNoteLabelByStatus';
import {NoteStatusEnum} from '../../enums/NoteStatusEnum';
// @ts-ignore
import {LineChart} from 'react-native-svg-charts';
import Point from '../../ui/Point';

import {styles} from './StatsScreenStyles';

export default function StatsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const data = [50, 0, 40, 95, 4, 24, 85, 91, 35, 53, 53, 0, 50, 20, 80];

  return (
    <View style={styles.StatsScreen}>
      <TopBar title={'STATS'} />
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
        <View style={styles.StatsScreen__points}>
          <Point
            title={'Total notes:'}
            isRow
            children={<Text style={styles.StatsScreen__point}>12</Text>}
          />
          <Point
            title={'Archived notes:'}
            isRow
            children={<Text style={styles.StatsScreen__point}>12</Text>}
          />
        </View>
        <View style={styles.StatsScreen__graphs}>
          <RadialGraph
            color={colors.green}
            value={2}
            maxValue={12}
            title={getNoteLabelByStatus(NoteStatusEnum.DOING)}
          />
          <RadialGraph
            color={colors.red}
            value={2}
            maxValue={12}
            title={getNoteLabelByStatus(NoteStatusEnum.EXPIRED)}
          />
          <RadialGraph
            color={colors.yellow}
            value={2}
            maxValue={12}
            title={getNoteLabelByStatus(NoteStatusEnum.WAITING)}
          />
          <RadialGraph
            color={colors.white}
            value={2}
            maxValue={12}
            title={getNoteLabelByStatus(NoteStatusEnum.DONE)}
          />
        </View>
        <Point
          title={
            'Graph with completed notes for the last 7 days (with status Done):'
          }
        />
        {/* TODO: add tabs with status for change linegraph*/}
        <LineChart
          style={{height: 200}}
          data={data}
          svg={{stroke: colors.blue}}
          contentInset={{top: 0, bottom: 0}}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: colors.blue,
            marginTop: -20,
          }}
        />
      </ScrollView>
    </View>
  );
}
