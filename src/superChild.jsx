import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { send } from './App';


const SupChild = () => {
    const {appCol, getDay} = useContext(send);
   const day = "monday";
 return(
    <div>

 <h1 style={{color:appCol}}>Super childdd</h1>
 <button onClick={()=>getDay(day)}> cick</button>
 </div>
 );

}

export default SupChild;
