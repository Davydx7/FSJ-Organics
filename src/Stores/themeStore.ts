import create from 'zustand';
import { ThemeStore } from './typings';

const useTheme = create<ThemeStore>((set) => ({
  theme: 'light',
  changeTheme() {
    set((state) => (
      state.theme === 'light' ? { theme: 'dark' } : { theme: 'light' }
    ));
  },
}));

export default useTheme;
