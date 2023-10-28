import {INote} from '../types/INote';
import {ADD_NOTE} from '../actions/notes';
import {NoteStatusEnum} from '../enums/NoteStatusEnum';

interface IInitialState {
  notes: INote[];
}

const initialState: IInitialState = {
  notes: [
    {
      id: 1,
      title: 'COOK',
      text: 'cook cook cook',
      date: '5 July, 12:00 PM',
      status: NoteStatusEnum.DONE,
    },
    {
      id: 2,
      title: 'COOK',
      text: 'cook cook cook',
      date: '5 July, 12:00 PM',
      type: 'Home',
      deadline: 'Today, 17:00 PM',
      status: NoteStatusEnum.EXPIRED,
    },
    {
      id: 3,
      title: 'COOK',
      text: 'cook cook cook',
      date: '5 July, 12:00 PM',
      type: 'Home',
      status: NoteStatusEnum.DOING,
    },
    {
      id: 4,
      title: 'COOK',
      text:
        'cook cook cook cook cook cook ' +
        'cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook',
      date: '5 July, 12:00 PM',
      deadline: 'Today, 17:00 PM',
      status: NoteStatusEnum.WAITING,
    },
  ],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    }
    default: {
      return state;
    }
  }
};
