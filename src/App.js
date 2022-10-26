import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter>

        </AppRouter>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;