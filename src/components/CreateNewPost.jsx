import React from "react";
import {Form} from 'react-bootstrap';
import "../index.css";
const CreateNewPost = props => {
  return (
    <>
      <Form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="contents"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <button className="savePost">Save Post</button>
      </Form>
    </>
  );
};
export default CreateNewPost;