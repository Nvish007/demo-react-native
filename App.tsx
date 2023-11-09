

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './src/redux';
import StackNavigation from './src/navigation/StackNavigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
