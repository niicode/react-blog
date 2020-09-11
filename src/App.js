import React from "react";
import './index.css';
import CreateNewPost from './components/CreateNewPost'
import Posts from './components/Post'
import DisplayAllPosts from "./components/DisplayAllPosts";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button, Jumbotron} from 'react-bootstrap';


const App = ( ) => {
  return (
    
      <Router>
        <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">PreMest Blog</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href=""></Nav.Link>
          <Nav.Link href="/create_post">New Post</Nav.Link>
        </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        <Switch>
        <Route exact path="/">
            <DisplayAllPosts/>
          </Route>
          <Route path="/login">
          </Route>
          <Route exact path="/creaate_post">
            <CreateNewPost/>
          </Route>
        </Switch>
        </div>
      </Router>
        
      
   
      
  
  );
};
export default App;
