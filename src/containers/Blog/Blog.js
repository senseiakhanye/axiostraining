import React, { Component } from 'react';
import Posts from '../Posts/Posts'
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                                }} 
                                exact
                                activeClassName="active">New Post</NavLink></li>
                            <li></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/new-post" exact render={() => <h1>Home 2</h1>}/> */}
                <Switch>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;