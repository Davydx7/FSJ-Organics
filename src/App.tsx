import { useLayoutEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import useTheme from './Stores/themeStore';

const queryClient = new QueryClient();

function App() {
  const changeTheme = useTheme((state) => state.changeTheme);

  const theme = useTheme((state) => state.theme);

  useLayoutEffect(() => {
    console.log('useEffect');
    if (localStorage.getItem('theme') === 'dark') {
      changeTheme();
    }
  }, [changeTheme]);


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" data-theme={theme}>
        <div className="container">
          <Header />
          <Navbar />
          <div className='outlet'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
