import React from 'react';
import {Text, View} from 'react-native';
// @ts-ignore
import {ProgressCircle} from 'react-native-svg-charts';
import {colors} from '../../styles/colors';

const DEFAULT_WIDTH = 134;
const DEFAULT_HEIGHT = 134;

interface IRadialGraphProps {
  color: string;
  value: number;
  maxValue: number;
  title: string;
}

export default function RadialGraph(props: IRadialGraphProps) {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        gap: 12,
      }}>
      <View
        style={{
          width: DEFAULT_WIDTH,
          height: DEFAULT_HEIGHT,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ProgressCircle
          style={{
            width: DEFAULT_WIDTH,
            height: DEFAULT_HEIGHT,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          strokeWidth={20}
          progress={props.value / props.maxValue}
          cornerRadius={8}
          progressColor={props.color}
          backgroundColor={colors.dark}
        />
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          {`${props.value} / ${props.maxValue}`}
        </Text>
      </View>
      <Text
        style={{
          color: colors.white,
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
}
