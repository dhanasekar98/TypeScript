import * as React from 'react'
import {useState } from 'react'

import styled from 'styled-components'


const Division=styled.div`
margin:20px;
background-color:transparent;
width:200px;
height:70px;
text-align: center;
border: 2px solid #000;
border-radius:2px;
`

const Input=styled.input`
margin-top:10%;
width:50%;
text-align: center;
height:40%;
border: transparent;
font-weight: 600;
letter-spacing: 2px;
font-size: 25px;
outline: none
`


const Otp:React.SFC=()=>{
    const [ name, setName ]=useState<string>('');
  
    return(
      <Division>
        <Input  
         type="text"
         onChange={(e)=>setName((e.target as any).value )}
         value= {name}/>

      </Division>
    )
    
}
export default Otp;