import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';




const Mmr = () =>{
const [mmr, setMmr] = useState([]);
const [reg, setReg]= useState("");
const [name, setName]= useState("");
const [tag,setTag]= useState("");


const fetchData=async()=>{
    
    console.log("mmr");
    try {
        const res = await axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/${reg}/${name}/${tag}`);
        setMmr(res.data.data);
       
    } catch (error) {
            if(error){
                alert("region code should be ap for Asia and kindly check your OPAC input details before trying again");
            }
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );




let ifNoData = <h1>Kindly enter your details to get OPAC info</h1>;
if(mmr.length>0){
    ifNoData =  
    <div className="categories-container">
       
       {mmr.map((itr)=>{
          return( 
          
          <div className="category-container" key ={itr.name}>
           
            <div className='background-image' style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/772377.jpg)`
        }}/>
        <div className='category-body-container'>
        <h1>Map Played: {itr.metadata.map}</h1>
             <h2>Mode: {itr.metadata.mode}</h2>
             <h2 className='udi'>Rounds Played: {itr.metadata.rounds_played}</h2>
             <h2 className='udi'>Total Rounds Won: {itr.teams.red.rounds_won}</h2>
       
         </div>
            </div>
          );
    }
               )}
          </div>  
}


    return (
        <div className="upper-search">
            <button type='button' buttonType='google' >Match Details</button> 
            <h1> {`OPAC ${name}'s last 5 matches info `}</h1>
{ifNoData}
<label>region</label>
 <input type="text" value={reg} onChange={(e)=>setReg(e.target.value)} name="region"  />
 <label>display name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  name="displayName"  />
        <label>tag</label>
        <input type="text" value = {tag} onChange={(e)=>setTag(e.target.value)}  name="tag"  />
       <button onClick={fetchData}>click</button>
        </div>
    );
}

export default Mmr;



