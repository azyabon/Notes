import React from 'react';
import Layout from './src/shared/Layout';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SheetProvider} from 'react-native-actions-sheet';

import './src/sheets/registry';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SheetProvider>
        <Layout />
      </SheetProvider>
    </SafeAreaProvider>
  );
}

export default App;
