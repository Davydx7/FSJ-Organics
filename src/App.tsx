import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import useTheme from './Stores/themeStore';

function App() {
  const theme = useTheme(state => state.theme);
  return (
    <div className="App" data-theme={theme}>
      <div className='container'>
        <Header />
        <Navbar />
        <h1>FSJ Organics</h1>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
