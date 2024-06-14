import './App.css';

import {ChakraProvider} from '@chakra-ui/react';

import {AlertProvider} from './context/alertContext';
import logo from './logo.svg';
import TableBooking from './TableBooking';
import Alert from './Alert';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <div style={{ textAlign: 'center' }}>
          <header>
            <img src={logo} alt='logo' style={{ margin: 'auto', display: 'block' }} />
          </header>
          <TableBooking />
          <footer>
            {/* Footer content */}
            <p>© 2024 Your Company. All rights reserved.</p>
          </footer>
        </div>
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
