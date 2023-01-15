import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Child from './child';

import Mmr from './users';


export const send = createContext();

const App = () => {
const [color,setColor]= useState('red');
const getDay= (item)=>{
    console.log(item);
}
 return(
    <send.Provider value = {{appCol:color, getDay:getDay}} >
        <div>
            <h1>Parent</h1>
           
<Child/>
<Mmr/>
</div>
</send.Provider>

 );

}

export default App;
