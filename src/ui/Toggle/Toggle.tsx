import React, {useEffect, useState} from 'react';
import {Switch} from 'react-native';
import {colors} from '../../styles/colors';

interface IToggleProps {
  isDisabled?: boolean;
  initialValue?: boolean;
  onToggle?: (bool: boolean) => void;
}

export default function Toggle(props: IToggleProps) {
  const {initialValue, isDisabled, onToggle} = props;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (initialValue) {
      setEnabled(initialValue);
    }
  }, [initialValue]);

  const toggle = (value: boolean) => {
    setEnabled(value);

    if (onToggle) {
      onToggle(value);
    }
  };

  return (
    <Switch
      style={{opacity: isDisabled ? 0.5 : 1}}
      trackColor={{false: colors.dark, true: colors.blue}}
      thumbColor={colors.white}
      ios_backgroundColor={enabled ? colors.blue : colors.dark}
      onValueChange={toggle}
      value={enabled}
      disabled={isDisabled}
    />
  );
}
