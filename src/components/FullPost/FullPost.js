import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id)
                axios.get(`/${this.props.id}`).then(response => {
                    this.setState({loadedPost: response.data})
                });
        }
    }

    deletePostHandler = (id) => {
        axios.delete(`/${this.props.id}`).then(response => {
            console.log(response);
        })
    }

    render () {
        let post = (this.props.id == null) ?
            <p style={{textAlign: 'center'}}>Please select a Post!</p> :
            <p style={{textAlign: 'center'}}>Loading ...</p>;
        if (this.state.loadedPost && this.state.loadedPost.title) {
            post =  (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            )
        }
        return post;
    }
}

export default FullPost;