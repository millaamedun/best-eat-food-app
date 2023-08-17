import React from 'react'
import useLocalStorage from 'use-local-storage'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import HeadlineCards from './components/headlineCards'
import Food from './components/Food'
import Category from './components/Category'

function App() {

  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
        <Navbar theme={theme} switchTheme={switchTheme} />
        <Hero theme={theme}/>
        <HeadlineCards theme={theme} />
        <Food theme={theme}/>
        <Category theme={theme}/>
    </div>
  );
}

export default App;