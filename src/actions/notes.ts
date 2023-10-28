import {INote} from '../types/INote';

export const ADD_NOTE = '@notes/add_note';

export const addNote = (note: INote) => (dispatch: any) => {
  dispatch({
    type: ADD_NOTE,
    note,
  });
};
