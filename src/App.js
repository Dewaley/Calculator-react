import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    if (result !== 'ERROR') {
      setResult(result.concat(e.target.name));
    } else {
      setResult(e.target.name);
    }
  };
  const clearAll = (e) => {
    setResult('');
  };
  const clear = (e) => {
    if (result == 'ERROR') {
      setResult('');
    } else {
      setResult(result.slice(0, -1));
    }
  };
  const solve = (e) => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('ERROR');
    }
  };
  const [colorTheme, setColorTheme] = useState('firstTheme');
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-number');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);
  const toggleTheme = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-number', theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <div className='container'>
        <div className='main-container'>
          <header>
            <h1>calc</h1>
            <div className='right'>
              <h3>THEME</h3>
              <div className='theme'>
                <div className='top'>
                  <span onClick={() => toggleTheme('firstTheme')}>1</span>
                  <span onClick={() => toggleTheme('secondTheme')} className="theme2">2</span>
                  <span onClick={() => toggleTheme('thirdTheme')}>3</span>
                </div>
                <div className='bottom'>
                  <span className='check'></span>
                </div>
              </div>
            </div>
          </header>
          <div className='calc'>
            <form>
              <input type='text' value={result} />
            </form>
            <div className='keypad'>
              <button name='7' onClick={handleClick}>
                7
              </button>
              <button name='8' onClick={handleClick}>
                8
              </button>
              <button name='9' onClick={handleClick}>
                9
              </button>
              <button className='rem' onClick={clear}>
                DEL
              </button>
              <button name='4' onClick={handleClick}>
                4
              </button>
              <button name='5' onClick={handleClick}>
                5
              </button>
              <button name='6' onClick={handleClick}>
                6
              </button>
              <button name='+' onClick={handleClick}>
                +
              </button>
              <button name='1' onClick={handleClick}>
                1
              </button>
              <button name='2' onClick={handleClick}>
                2
              </button>
              <button name='3' onClick={handleClick}>
                3
              </button>
              <button name='-' onClick={handleClick}>
                -
              </button>
              <button name='.' onClick={handleClick}>
                .
              </button>
              <button name='0' onClick={handleClick}>
                0
              </button>
              <button name='/' onClick={handleClick}>
                /
              </button>
              <button name='*' onClick={handleClick}>
                x
              </button>
              <button className='rem reset' onClick={clearAll}>
                RESET
              </button>
              <button className='equate' onClick={solve}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
