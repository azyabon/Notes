import React from 'react';
import Layout from './src/shared/Layout';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SheetProvider} from 'react-native-actions-sheet';
import {Provider} from 'react-redux';
import {store} from './src/reducers';

import './src/sheets/registry';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SheetProvider>
        <Provider store={store}>
          <Layout />
        </Provider>
      </SheetProvider>
    </SafeAreaProvider>
  );
}

export default App;
