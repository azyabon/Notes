import {INote} from '../types/INote';

export const getNoteById = (notes: INote[], noteId: number) =>
  notes.filter((note: INote) => note.id === noteId)[0];
