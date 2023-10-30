import React from 'react';
import Svg, {Path, Rect, G} from 'react-native-svg';

interface IStatsIconProps {
  color?: string;
}

export default function StatsIcon(props: IStatsIconProps) {
  const {color = '#FFFFFF'} = props;

  return (
    <Svg
      width="34px"
      height="34px"
      viewBox="0 0 24 24"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="0" fill="none" width="24" height="24" />
      <G>
        <Path
          d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14zM9 17H7v-5h2v5zm4 0h-2v-7h2v7zm4 0h-2V7h2v10z"
          fill={color}
        />
      </G>
    </Svg>
  );
}
