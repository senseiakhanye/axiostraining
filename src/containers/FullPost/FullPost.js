import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (+this.state.loadedPost.id !== +this.props.match.params.id))
                axios.get(`/${this.props.match.params.id}`).then(response => {
                    this.setState({loadedPost: response.data})
                });
        }
    }

    componentDidUpdate() {
        this.loadData();
    }

    deletePostHandler = (id) => {
        axios.delete(`/${id}`).then(response => {
            console.log(response);
        })
    }

    render () {
        let post = (this.props.match.params.id == null) ?
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