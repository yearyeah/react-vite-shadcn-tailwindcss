import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './globals.css';
import { Button } from './components/ui/button';
import { useStore, resetData } from './store/index';
import { useThemeStore, setTheme } from './store/theme';
import { ChevronRightIcon } from '@radix-ui/react-icons';

function ShowCount() {
  const store = useStore();
  return (<div>count:{store.count}</div>)
}


function App() {
  const [count, setCount] = useState(0);
  const store = useStore();
  const themeStore = useThemeStore();

  useEffect(() => {
    return () => {
      // 在组件卸载的时候重置数据
      resetData()
    }
  }, []);



  return (
    <>
      <h2>Button</h2>
      <div>
        {/* <Space> */}
          <Button size={'default'}>default</Button>
          <Button size={'sm'}>sm</Button>

          <Button size={'lg'}>lg</Button>
          <Button size={'icon'}>icon</Button>
        {/* </Space> */}
      </div>
      <div>
        {/* <Space> */}
          <Button size={'sm'} variant="outline">
            outline
          </Button>
          <Button size={'sm'} variant="secondary">
            secondary
          </Button>
          <Button size={'sm'} variant="destructive">
            destructive
          </Button>

          <Button variant="ghost">ghost</Button>
          <Button variant="link">link</Button>

          <Button variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        {/* </Space> */}
      </div>
      <h2>store</h2>
      <div>
        <ShowCount />
        <div>count:{store.count}</div>
        <Button onClick={() => {
          store.count += 1;
        }}>+1</Button>
      </div>

      <h2>dark mode</h2>
      <div>theme:{themeStore.theme}</div>
      <div>
        <Button onClick={() => {
          setTheme('dark');
        }}>dark</Button>&nbsp;
        <Button variant="outline" onClick={() => {
          setTheme('light');
        }}>light</Button>
      </div>

    </>
  );
}

export default App;
