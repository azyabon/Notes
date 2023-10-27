import {NoteStatusEnum} from '../enums/NoteStatusEnum';

export const getNoteLabelByStatus = (status: string) => {
  switch (status) {
    case NoteStatusEnum.DONE:
      return 'Done';
    case NoteStatusEnum.DOING:
      return 'Doing';
    case NoteStatusEnum.EXPIRED:
      return 'Expired';
    case NoteStatusEnum.WAITING:
      return 'Waiting';
    default:
      return 'unknown';
  }
};
