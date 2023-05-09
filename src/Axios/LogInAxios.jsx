import axios from "axios";

const  LogInAxios = async(props) => {
    console.log("on LogInAxios Page",props.email ,props.password);
    const email = props.email;
    const password = props.password;
    console.log("after destructure", email, password);
    try {
        const data = await axios.post('http://localhost:4500/home/login', {
            email,
            password,
        });
        if (data) {
            localStorage.setItem("user", JSON.stringify(data));
            return true;
        }

    } catch (error) {
        alert("Invalid email or password");
        return false;
    }
}

export default LogInAxios;

