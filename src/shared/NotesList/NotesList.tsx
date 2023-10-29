import React, {Dispatch} from 'react';
import {INote} from '../../types/INote';
import {TouchableOpacity} from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import NoteCard from '../../screens/NotesScreen/views/NoteCard/NoteCard';
import {useDispatch} from 'react-redux';
import {setNotes} from '../../actions/notes';

interface INotesListProps {
  notes: INote[];
}

function NotesList(props: INotesListProps) {
  const dispatch: Dispatch<any> = useDispatch();
  const renderItem = ({item, drag, isActive}: RenderItemParams<INote>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}>
          <NoteCard note={item} />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      data={props.notes}
      onDragEnd={({data}) => dispatch(setNotes(data))}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

export default NotesList;
