
import { proxy } from 'valtio';
import { useProxy } from 'valtio/utils';


const themeStorageKey = 'theme';
let theme = localStorage.getItem(themeStorageKey);
if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
} else {
    theme = theme === 'dark' ? 'dark' : 'light';
}

setTheme(theme)

let matchMedia = window.matchMedia('(prefers-color-scheme: light)');
matchMedia.addEventListener('change', function () {
  // console.log(`当前的主题是:${this.matches ? 'light' : 'dark'}`);
  if (this.matches) {
    // document.documentElement.setAttribute('class', 'light');
    setTheme('light');
    return;
  }
  // document.documentElement.setAttribute('class', 'dark');
  setTheme('dark');
});

const themeObject = proxy({theme});


export const useThemeStore = () => {
    return useProxy(themeObject);
  };

export function setTheme(_theme:string) {
    localStorage.setItem(themeStorageKey,_theme);
    document.documentElement.setAttribute('class', _theme);
}