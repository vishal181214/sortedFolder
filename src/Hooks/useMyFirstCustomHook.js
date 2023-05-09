import { useState } from "react";

 const useMyFirstCustomHook = () => {
    const [count, setCount] = useState('HellO');
    // setCount(0);
    return { count, setCount };
  };


export default useMyFirstCustomHook;

