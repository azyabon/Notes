import React from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {colors} from '../../styles/colors';

interface IProps {
  onPress: () => void;
  label: string;
  maxWidth?: string | number;
  beforeIcon?: React.ReactNode;
  isDisabled?: boolean;
  style?: any;
  isLoading?: boolean;
  isOutline?: boolean;
  secondLabel?: string;
}

function Button(props: IProps) {
  const {
    onPress,
    label,
    isOutline,
    beforeIcon = null,
    maxWidth,
    isDisabled = false,
    style,
    isLoading,
    secondLabel,
  } = props;

  return (
    <View
      style={{
        width: '100%',
        maxWidth,
        overflow: 'hidden',
        borderRadius: 12,
        borderWidth: isDisabled ? 0 : 1,
        borderStyle: 'solid',
        borderColor: colors.blue,
        ...style,
      }}>
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: isOutline ? 'transparent' : colors.blue,
          width: '100%',
          padding: 18,
        }}
        disabled={isDisabled}>
        <View
          style={
            secondLabel && !isLoading
              ? {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }
              : {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }>
          {isLoading ? (
            <ActivityIndicator
              color={isDisabled || isOutline ? colors.dark : colors.white}
            />
          ) : (
            <>
              {beforeIcon && beforeIcon}

              <Text
                style={{
                  textAlign: 'center',
                  color: colors.white,
                  fontSize: 14,
                  marginLeft: 8,
                }}>
                {label}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: colors.white,
                  fontSize: 14,
                  marginLeft: 8,
                }}>
                {secondLabel}
              </Text>
            </>
          )}
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
