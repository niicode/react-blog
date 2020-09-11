import React from "react";
import {Button, Form} from 'react-bootstrap';
import "../index.css";
const ModifyPost = props => {
  return (
    <>
      <Form>
        <h1>Modify Post</h1>
        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="contents"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <Button onClick ={props.updatePost}>Update Post</Button>
      </Form>
    </>
  );
};
export default ModifyPost;