import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Transport from './Components/Transport/Transport';

 export const CategoryContext = createContext();

function App() {
   const [category ,setCategory]  = useState('laptop');
  
  return (
    <CategoryContext.Provider value ={[category ,setCategory]}>
      <p> count value :{category}</p>
      <Header  setCount ={setCategory}></Header>
      <Home ></Home>
      <Transport ></Transport>

         
    </CategoryContext.Provider>
  );
}

export default App;
