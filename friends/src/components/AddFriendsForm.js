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
    <div className="add-friend">
        <h1>Friends List</h1>
      <form onSubmit={handleSubmit}>
          <div class="inputs">
        <input
        className="single-input"
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Name"
          value={item.name}
        />

        <input
        className="single-input"
          type="text"
          name="age"
          onChange={changeHandler}
          placeholder="Age"
          value={item.age}
        />

        <input
        className="single-input"
          type="text"
          name="email"
          onChange={changeHandler}
          placeholder="Email"
          value={item.email}
        />
        <button>Add New Friend</button>
        
        </div>
      </form>
    </div>
  );
};

export default AddFriendsForm;