import axios from "axios";

const GetToDoList = async () =>{
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        if(data)
            return data.data;
      console.log("from api file",data);  
    } catch (error) {
        console.log("Error in Fetching API data");
    }
}

export default GetToDoList;



// https://jsonplaceholder.typicode.com/todos