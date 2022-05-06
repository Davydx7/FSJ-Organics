import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <h1>FSJ Organics</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
