import {registerSheet} from 'react-native-actions-sheet';
import {SheetsId} from '../config/sheetsId';
import AddNoteSheet from './AddNoteSheet/AddNoteSheet';
import NoteFilterSheet from './NotesFilterSheet/NotesFilterSheet';
import NoteSettingsSheet from './NoteSettingsSheet/NoteSettingsSheet';

registerSheet(SheetsId.ADD_NOTE_SHEET, AddNoteSheet);
registerSheet(SheetsId.NOTES_FILTER_SHEET, NoteFilterSheet);
registerSheet(SheetsId.NOTES_SETTINGS_SHEET, NoteSettingsSheet);
