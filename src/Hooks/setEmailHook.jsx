import { useState } from "react";

const useEmailCustomHook = () => {
    const [email,setEmail] = useState('');
    return { email,setEmail };
  }

export default useEmailCustomHook;