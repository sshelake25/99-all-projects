import logo from './logo.svg';
import './App.css';
import nature from './images/nature.jpg';
import Contact from './contact';
import Address from './address';
import Comment from './comment';

/**
 * Two to create components in react js 
 * 1. function keyword
 *      return {}
 *    - return () // short cut of render method // JSX - UI 
 * 2. class keyword
 *   - render method / function of in side
 *   - JSX 
 */


function App() {
  let myTitle = "Welcome to react js learning camp";
  return (
    <>
      <header>
        <img src={nature} width="100%" height="200" ></img>
        {/* this is calling of function component of react js  */}
        <Contact></Contact>
      </header>
      <div className="thbs-text">
        <h2>{myTitle}</h2>
      </div>
      <Address time="ONLY WED"></Address>
      <Comment text="I am class comp" date="13th May 2022"></Comment>
    </>
  );
}

export default App;
