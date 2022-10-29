import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered: ${username}`);
    alert(`You entered: ${description}`);
    alert(`You entered: ${country}`);
    alert(`You entered: ${password}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <br />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Country</label>
        <br />
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option>China</option>
          <option>France</option>
          <option>Mexico</option>
          <option>Spain</option>
          <option>United States</option>
        </select>
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
