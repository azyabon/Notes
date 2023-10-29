import React, {Dispatch} from 'react';
import MainNavigation from '../../screens/MainNavigation';
import {StatusBar} from 'react-native';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import storage from '../../libs/storage';
import {STORAGE_NOTES_KEY} from '../../config/storage';
import {setNotes} from '../../actions/notes';
import {useDispatch} from 'react-redux';

export default function Layout() {
  const dispatch: Dispatch<any> = useDispatch();

  useEffectOnce(() => {
    storage
      .load({
        key: STORAGE_NOTES_KEY,
        autoSync: true,
        syncInBackground: true,
        syncParams: {
          someFlag: true,
        },
      })
      .then(ret => {
        dispatch(setNotes(ret.notes ?? []));
      });
  });

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <MainNavigation />
    </>
  );
}
