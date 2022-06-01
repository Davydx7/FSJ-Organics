import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import useTheme from './Stores/themeStore';

const queryClient = new QueryClient()

function App() {
  const theme = useTheme(state => state.theme);

  return (
    <QueryClientProvider client={queryClient} >
      <div className="App" data-theme={theme}>
        <div className='container'>
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
