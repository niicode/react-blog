import React from "react";
import {Button, Form} from 'react-bootstrap';
import '../index.css';

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <Form>     
      <section>
        <h3>{title}</h3>
        <p> {content}</p>
        <Button className="post" onClick={() => editPost(id)}>Edit</Button>
        <Button className="post" onClick={() => deletePost(id)}>Delete</Button>
      </section>
      </Form>
    </>
  );
};
export default Post;