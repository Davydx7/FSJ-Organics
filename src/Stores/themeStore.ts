import create from 'zustand';
import { ThemeStore } from './typings';

const useTheme = create<ThemeStore>((set) => ({
  theme: 'light',
  changeTheme() {
    set((state) => {
      if (state.theme === 'light') {
        localStorage.setItem('theme', 'dark');
        console.log('dark');
        return { theme: 'dark' };
      } else {
        localStorage.setItem('theme', 'light');
        console.log('light');
        return { theme: 'light' };
      }
    });
  },
}));

export default useTheme;
