import {useEffect, useState} from 'react';
import {INote} from '../types/INote';
import {NoteStatusEnum} from '../enums/NoteStatusEnum';

export function useStatistics(notes: INote[]) {
  const [done, setDone] = useState(0);
  const [waiting, setWaiting] = useState(0);
  const [doing, setDoing] = useState(0);
  const [expired, setExpired] = useState(0);
  const [archived, setArchived] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setArchived(notes.filter((note: INote) => note.isArchived).length);
    setTotal(notes.length);
    setExpired(
      notes.filter((note: INote) => note.status === NoteStatusEnum.EXPIRED)
        .length,
    );
    setDoing(
      notes.filter((note: INote) => note.status === NoteStatusEnum.DOING)
        .length,
    );
    setWaiting(
      notes.filter((note: INote) => note.status === NoteStatusEnum.WAITING)
        .length,
    );
    setDone(
      notes.filter((note: INote) => note.status === NoteStatusEnum.DONE).length,
    );
  }, [notes]);

  return {
    done,
    waiting,
    doing,
    expired,
    archived,
    total,
  };
}
