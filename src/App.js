import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Error from "./components/Error";
function App() {
  // const user = JSON.parse(localStorage.getItem('user'));
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route> 
            <Route path="/error" element={<Error />}></Route>
          
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
