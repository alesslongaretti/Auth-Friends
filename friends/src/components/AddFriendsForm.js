import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
   
  name: "",
  age: "",
  email: ""
};

const AddFriendsForm = (props) => {
  const [item, setItem] = useState(initialItem);

  const changeHandler = ev => {
    setItem({
      ...item,
      [ev.target.name]: ev.target.value
    });
  };

  const handleSubmit = e => {
    
    axiosWithAuth()
      .post('/friends', item)
      .then(res => { 
        console.log(res);
        props.history.push('/friends');
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add new friends</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={item.name}
        />

        <input
          type="text"
          name="age"
          onChange={changeHandler}
          placeholder="age"
          value={item.age}
        />

        <input
          type="text"
          name="email"
          onChange={changeHandler}
          placeholder="email"
          value={item.email}
        />
        <button>Add New Friend</button>
      </form>
    </div>
  );
};

export default AddFriendsForm;