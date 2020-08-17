import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'





const Input1=styled.input`
width:350px;
height:35px;
font-size:20px;
margin: 20px;
outline: none;
border:none;
border-bottom:${(props)=>props.value?'2px solid #2196F3':'2px solid #999'};
&:focus~ Label{
    transform:translateY(-80%);
    font-size:12px;
    color:#2196F3;
    font-weight:700;
  }
  &:focus{
    border-bottom:2px solid #2196F3;
  }
`

const Float:React.SFC<AppProps>=props=>{


    const [ name, setName ]=useState<string>('');
   
    const Label=styled.label`
    position: absolute;
    top:25px;
    color:${(name ? '#2196F3':'#999')};
    transform:${(name ?'translateY(-80%)':'translate(0%)')};
    font-size: ${(name?'12px':'20px')};
    font-weight:700;
    translate:translateY(0%);
    left:20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    transition: 0.7s;`

   
    return(
        <div>
        <Input1  
         type="text"
         onChange={(e)=>setName((e.target as any).value )}
         value= {name}/>
         <Label>Email</Label>
        </div>
    )
}
interface AppProps{

    
}

export default Float;
