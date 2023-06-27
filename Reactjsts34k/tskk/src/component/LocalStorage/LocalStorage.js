import React, { useState } from "react";

export default function LocalStorage() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  console.log(name, pwd);
  const handleAdd = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("password", pwd);
  };
  const handleRemove = ()=>{
    localStorage.removeItem('name');
    localStorage.removeItem('password');
  }
  return (
    <div>
      <form>
        <h1>Name of the User:</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Password of the User:</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button onClick={handleAdd}>Add to Local Storage</button>
        {localStorage.getItem("name") && (
          <h1>Name :{localStorage.getItem("name")}</h1>
        )}
        {localStorage.getItem("password") && (
          <h1>Password:{localStorage.getItem("password")}</h1>
        )}
        <button onClick={handleRemove}>Remove from LocalStorage</button>
      </form>
    </div>
  );
}
