import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
// import axios from 'axios';
import axios from '../../axios';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        axios.get("").then(response => {
            let posts = response.data.slice(0, 4).map(post => {
                return { ...post, author: "Kat" };
            })
            this.setState({posts: posts});
        }).catch(error => {
            console.log(error);
        });
    }

    postSelectedHandler = (selectedId) => {
        this.setState({selectedPostId: selectedId});
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={this.postSelectedHandler}
                id={post.id}/>;
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;