import React, {useState} from 'react';
import './App.css';
import {MyButton} from "./button";
import Profile from "./profile";
import ShoppingList from "./shopping-list";

function App() {
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1);
    }
  return (
      <div>
        <h1>Welcome to my app</h1>
          <div>
          <Profile />
          </div>
          <MyButton count={count} onClick={handleClick}/>
          <MyButton count={count} onClick={handleClick}/>
          <ShoppingList />
          <AboutPage />
      </div>
  );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

export default App;
