import {INote} from '../types/INote';
import {
  ADD_NOTE,
  ARCHIVED_NOTE,
  SET_NOTES,
  UNARCHIVED_NOTE,
  UNARCHIVED_NOTES,
} from '../actions/notes';
import storage from '../libs/storage';
import {STORAGE_NOTES_KEY} from '../config/storage';

interface IInitialState {
  notes: INote[];
}

const initialState: IInitialState = {
  notes: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTE: {
      storage.save({
        key: STORAGE_NOTES_KEY,
        data: {
          notes: [...state.notes, action.note],
        },
      });

      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    }
    case SET_NOTES: {
      return {
        ...state,
        notes: [...state.notes, ...action.notes],
      };
    }
    case ARCHIVED_NOTE: {
      const notes = state.notes.map((note: INote) => {
        if (note.id === action.noteId) {
          note.isArchived = true;
        }

        return note;
      });

      storage.save({
        key: STORAGE_NOTES_KEY,
        data: {
          notes,
        },
      });

      return {
        ...state,
        notes,
      };
    }
    case UNARCHIVED_NOTE: {
      const notes = state.notes.map((note: INote) => {
        if (note.id === action.noteId) {
          note.isArchived = false;
        }

        return note;
      });

      storage.save({
        key: STORAGE_NOTES_KEY,
        data: {
          notes,
        },
      });

      return {
        ...state,
        notes,
      };
    }
    case UNARCHIVED_NOTES: {
      const notes = state.notes.map((note: INote) => ({
        ...note,
        isArchived: false,
      }));

      storage.save({
        key: STORAGE_NOTES_KEY,
        data: {
          notes,
        },
      });

      return {
        ...state,
        notes,
      };
    }
    default: {
      return state;
    }
  }
};
