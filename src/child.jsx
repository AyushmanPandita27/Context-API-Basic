import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { send } from './App';
import SupChild from './superChild';

const Child = () => {
    const {appCol} = useContext(send);
   
 return(
    <div>

 <h1 style={{color:appCol}}>childdd</h1>
 <SupChild/>
         
 </div>
 );

}

export default Child;
