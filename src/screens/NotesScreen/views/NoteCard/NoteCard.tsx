import React from 'react';
import {INote} from '../../../../types/INote';
import {Pressable, Text, View} from 'react-native';
import {getNoteColorByStatus} from '../../../../utils/getNoteColorByStatus';
import {getNoteLabelByStatus} from '../../../../utils/getNoteLabelByStatus';
import {useNavigation} from '@react-navigation/native';
import {NOTE_SCREEN} from '../../../../config/routes';
import {NoteStatusEnum} from '../../../../enums/NoteStatusEnum';

import {styles} from './NoteCardStyles';
import {colors} from '../../../../styles/colors';

interface INoteCardProps {
  note: INote;
  isListView?: boolean;
  withoutStatus?: boolean;
}

export default function NoteCard(props: INoteCardProps) {
  const {note, isListView} = props;
  const {navigate} = useNavigation();

  return (
    <Pressable
      // @ts-ignore
      onPress={() => navigate(NOTE_SCREEN)}
      style={[
        styles.NoteCard,
        {
          borderColor: getNoteColorByStatus(note.status),
          shadowColor: getNoteColorByStatus(note.status),
          width: isListView ? '100%' : '48%',
        },
      ]}>
      <View>
        <Text style={styles.NoteCard__date}>{note.date}</Text>
        <View style={styles.NoteCard__line} />
        <Text
          numberOfLines={1}
          style={[
            styles.NoteCard__title,
            {
              textDecorationLine:
                note.status === NoteStatusEnum.DONE ? 'line-through' : 'none',
            },
          ]}>
          {note.title}
        </Text>
        <Text style={styles.NoteCard__type}>{`type: ${note.type ?? '-'}`}</Text>
        <Text
          style={[
            styles.NoteCard__deadline,
            {
              textDecorationLine:
                note.status === NoteStatusEnum.EXPIRED ? 'underline' : 'none',
              color:
                note.status === NoteStatusEnum.EXPIRED
                  ? colors.red
                  : colors.gray,
            },
          ]}>
          {`deadline: ${note.deadline ?? '-'}`}
        </Text>
        <Text
          numberOfLines={!props.withoutStatus ? 4 : 3}
          style={[
            styles.NoteCard__text,
            {
              textDecorationLine:
                note.status === NoteStatusEnum.DONE ? 'line-through' : 'none',
            },
          ]}>
          {note.text}
        </Text>
      </View>
      {props.withoutStatus && (
        <View>
          <View style={styles.NoteCard__line} />
          <Text
            style={[
              styles.NoteCard__status,
              {color: getNoteColorByStatus(note.status)},
            ]}>
            {`status: ${getNoteLabelByStatus(note.status)}`}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
