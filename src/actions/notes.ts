import {INote} from '../types/INote';

export const ADD_NOTE = '@notes/add_note';

export const SET_NOTES = '@notes/set_notes';

export const ARCHIVED_NOTE = '@notes/archived_note';

export const UNARCHIVED_NOTE = '@notes/unarchived_note';

export const UNARCHIVED_NOTES = '@notes/unarchived_notes';

export const addNote = (note: INote) => (dispatch: any) => {
  dispatch({
    type: ADD_NOTE,
    note,
  });
};

export const archivedNote = (noteId: number) => (dispatch: any) => {
  dispatch({
    type: ARCHIVED_NOTE,
    noteId,
  });
};

export const unarchivedNote = (noteId: number) => (dispatch: any) => {
  dispatch({
    type: UNARCHIVED_NOTE,
    noteId,
  });
};

export const unarchivedNotes = () => (dispatch: any) => {
  dispatch({
    type: UNARCHIVED_NOTES,
  });
};
export const setNotes = (notes: INote[]) => (dispatch: any) => {
  dispatch({
    type: SET_NOTES,
    notes,
  });
};
