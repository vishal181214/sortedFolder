import React, { useEffect, useState } from 'react'
import GetToDoList from '../Axios/GetToDoList'
import { Link } from 'react-router-dom';
import Input from './Input';
import useMyFirstCustomHook from '../Hooks/useMyFirstCustomHook';
import useEmailCustomHook from '../Hooks/setEmailHook';

const Welcome = () => {
  const {count,setCount} = useMyFirstCustomHook();
  const [info,setInfo] = useState([]);
  const {email,setEmail} = useEmailCustomHook();
  const getInfo = async()=>{
    const data = await GetToDoList();
    setInfo(data)
  }

  const changeTo = () =>{
    setCount('React');
  }
   
 useEffect(()=>{
  getInfo()
 },[])

 const printData = () =>{
  console.log("userName:-"+count,"email:-"+email);
 }

  return (
    <div>
      <h3>Wel-Come User</h3>
      <h5>Count is:- {count}</h5>
      <Link to='/error'>GoTo</Link>
      <button onClick={changeTo}>Msg Change</button>
      {
        info.slice(0,2).map((user,index)=>{
          return(
            <p key={index}>{user.title}</p>
          )
        })
      }
      <input name="username" label="username" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <input name="email" label="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick={printData}>Click</button>
    </div>
  )
}

export default Welcome
