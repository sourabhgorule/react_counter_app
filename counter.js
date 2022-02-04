import { useState } from "react"
import Button from '@mui/material/Button';
import '../styles/counter.css'

export default function Counter(){

    const [cnt,setCnt]=useState(0)
    function incr(){
        
        setCnt(cnt+1)
       // document.getElementById("cntid").style.color="green"
        if(cnt>=0){
            document.getElementById("cntid").style.color="green"
        }
        else{
            document.getElementById("cntid").style.color="red"
        }
        console.log(cnt)
       
    }
    function decr(){
        setCnt(cnt-1)
        if(cnt==0){
            document.getElementById("cntid").style.color="black"
        }
        else if(cnt<0){
            document.getElementById("cntid").style.color="red"
        }
        else{
            document.getElementById("cntid").style.color="green"
        }
        console.log(cnt)
        
        //document.getElementById("cntid").style.color="red"
       
    }
  
    return(
        <div className="main-demo">
            <h1 id="cntid">{cnt}</h1>
            <Button onClick={incr} variant="outlined" color="success">Increament</Button><span></span><Button variant="outlined" onClick={decr} color="error">Decreament</Button>
        </div>
    )
}