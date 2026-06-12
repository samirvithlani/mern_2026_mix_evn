import axios from "axios";
import React from "react";

export const ApiDemo3 = () => {

  
  const addUser = async () => {
    //hardcoded object create..
    const userObj = {
      name: "vansh1",
      age: 20,
      email: "vansh1@gmail.com",
      password: "vansh123",
      isActive: true,
    };
    const res = await axios.post(
      "https://node5.onrender.com/user/user/",
      userObj,
    );
    console.log(res); //axios object
    console.log(res.data); //res.data..
    if (res.status == 200) {
      alert("user saved..");
      //redirect..
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo3</h1>
      <button onClick={addUser}>ADD</button>
    </div>
  );
};
