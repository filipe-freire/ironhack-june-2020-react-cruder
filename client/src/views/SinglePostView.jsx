import React, { Component } from 'react';
import { loadPost } from './../services/post';

class SinglePostView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      post: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    loadPost(id)
      .then(data => {
        const post = data.post;
        this.setState({
          post,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const post = this.state.post;
    return (
      <div>
        {(this.state.loaded && (
          <>
            <p>{post.content}</p>
            <small>{post.creationDate}</small>
          </>
        )) || <p>Loading...</p>}
      </div>
    );
  }
}

export default SinglePostView;
