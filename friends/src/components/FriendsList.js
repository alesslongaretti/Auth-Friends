import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
            this.setState({...this.state, friends: res.data})
        })
        .catch(err => console.error(err));
    }

    render(){
        return (
            <div>
                <h1>Friends</h1>
                <div>

                {this.state.friends.map(friends => (
                    <div>
                        <p>{friends.id}</p>
                        <p>{friends.name}</p>
                        <p>{friends.age}</p>
                        <p>{friends.email}</p>
                        
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default FriendsList;