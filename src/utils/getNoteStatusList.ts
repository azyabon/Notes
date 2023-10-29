import {NoteStatusEnum} from '../enums/NoteStatusEnum';
import {getNoteLabelByStatus} from './getNoteLabelByStatus';

export const getNoteStatusList = () => {
  return [
    {
      id: NoteStatusEnum.DONE,
      label: getNoteLabelByStatus(NoteStatusEnum.DONE),
      value: NoteStatusEnum.DONE,
    },
    {
      id: NoteStatusEnum.DOING,
      label: getNoteLabelByStatus(NoteStatusEnum.DOING),
      value: NoteStatusEnum.DOING,
    },
    {
      id: NoteStatusEnum.WAITING,
      label: getNoteLabelByStatus(NoteStatusEnum.WAITING),
      value: NoteStatusEnum.WAITING,
    },
  ];
};
