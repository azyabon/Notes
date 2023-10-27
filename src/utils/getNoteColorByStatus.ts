import {NoteStatusEnum} from '../enums/NoteStatusEnum';
import {colors} from '../styles/colors';

export const getNoteColorByStatus = (status: string) => {
  switch (status) {
    case NoteStatusEnum.DONE:
      return colors.white;
    case NoteStatusEnum.DOING:
      return colors.green;
    case NoteStatusEnum.EXPIRED:
      return colors.red;
    case NoteStatusEnum.WAITING:
      return colors.yellow;
    default:
      return colors.blue;
  }
};
