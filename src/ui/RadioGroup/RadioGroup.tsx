import React, {useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {colors} from '../../styles/colors';
import {Text} from 'react-native';

interface IRadioGroupProps {
  items: RadioButtonProps[];
  selectedId?: string;
  onChange?: (value: string) => void;
  title?: string;
}

export default function RadioGroupElements(props: IRadioGroupProps) {
  const [selectedId, setSelectedId] = useState(props.selectedId);

  const style = (id: string) => ({
    borderColor: colors.blue,
    labelStyle: {
      color: colors.white,
      fontSize: 16,
    },
    borderSize: selectedId === id ? 6 : 2,
  });

  return (
    <>
      {props.title && (
        <Text
          style={{
            fontSize: 18,
            color: colors.white,
            fontWeight: '500',
            textAlign: 'left',
          }}>
          {props.title}
        </Text>
      )}
      <RadioGroup
        containerStyle={{alignItems: 'flex-start'}}
        radioButtons={props.items.map(item => ({...item, ...style(item.id)}))}
        onPress={(value: string) => {
          setSelectedId(value);

          if (props.onChange) {
            props.onChange(value);
          }
        }}
        selectedId={selectedId}
      />
    </>
  );
}
