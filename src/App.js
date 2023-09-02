import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import HelloWorld from './components/HelloWorld';
import './App.css';
import DataTable from './components/DataTable';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="min-h-screen flex justify-center items-center sm:py-20 py-10">
          <div className='container mx-auto px-6 flex flex-col justify-center items-start gap-6'>
            <HelloWorld />
            <DataTable />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
