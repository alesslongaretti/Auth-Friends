import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriendsForm from "./AddFriendsForm";

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getData();
    }


    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res);
            this.setState({friends: res.data})
        })
        .catch(err => console.error(err));
    }

    render(){
        return (
            <div>
                <h1>Friends</h1>
                <div>

                {this.state.friends.map(friends => (
                    <div key={friends.id}>
                        <p>Name: {friends.name}</p>
                        <p>Age: {friends.age}</p>
                        <p>Email: {friends.email}</p>
                        
                    </div>
                ))}
                </div>
                <AddFriendsForm/>
            </div>
        )
    }
}

export default FriendsList;