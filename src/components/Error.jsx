import React from 'react'
import useMyFirstCustomHook from '../Hooks/useMyFirstCustomHook';
import { Link } from 'react-router-dom';

function Error() {
    const {count,setCount} = useMyFirstCustomHook();

    const change =() =>{
        // setCount('Error Comp');
    }

  return (
    <div>
        <h2>On Error:- {count}</h2>
        <button onClick={change}>Change</button>
        <Link to='/welcome'>GoTo</Link>
      <h3>No Route Matches</h3>
    </div>
  )
}

export default Error
