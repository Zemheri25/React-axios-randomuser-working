import email from "./image/email.svg";
import "./App.css";
import axios from "axios";
import User from "./components/User";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  const getApi = async () => {
    const response = await axios({
      url: "https://randomuser.me/api/",
      method: "GET",
    });
    console.log(response.data.results)
    setUser(response.data.results)
  };

  const handleClick = () =>{
    getApi();
  }



  useEffect(() => {
    getApi();
  }, []);

  return <div className="App">
    {user.map((item, index) => {
      return <User item = {item} key = {index}/>
    })}

    <button className="button" onClick={handleClick}>Random User</button>

  </div>;
}

export default App;
