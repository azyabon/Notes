import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BackIcon() {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 10 18"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7071 0.37291C10.0976 0.763435 10.0976 1.3966 9.7071 1.78712L3.1871 8.30712C2.80763 8.6866 2.80763 9.31343 3.1871 9.69291L9.7071 16.2129C10.0976 16.6034 10.0976 17.2366 9.7071 17.6271C9.31658 18.0176 8.68341 18.0176 8.29289 17.6271L1.77289 11.1071C0.612365 9.9466 0.612365 8.05343 1.77289 6.89291L8.29289 0.37291C8.68341 -0.017614 9.31658 -0.017614 9.7071 0.37291Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}
