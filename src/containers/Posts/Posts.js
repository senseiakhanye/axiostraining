import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';


class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (selectedId) => {
        console.log(this.props);
        this.props.history.push({
            pathname: this.props.match.url + "/" + selectedId
        })
        // this.props.history.push('/' + selectedId);
        // this.setState({selectedPostId: selectedId});
    }

    componentDidMount() {
        console.log(this.props);
        axios.get("").then(response => {
            let posts = response.data.slice(0, 4).map(post => {
                return { ...post, author: "Kat" };
            })
            this.setState({posts: posts});
        }).catch(error => {
            console.log(error);
        });
    }

    render () {
        const posts = this.state.posts.map(post => {
            return (
                // <Link to={'/' + post.id}  >
                <Post
                    key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}
                    id={post.id}/>
                // </Link>
            )
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
            
        )
    }
}

export default Posts;