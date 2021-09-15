import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import {Container, Button, Segment, List} from 'semantic-ui-react';

const LoginPage = () => {
  const [userInfo, setUserInfo] = React.userSate({
    username: '',
    password: '',
    email: '',
    retypePassword: '',
  });
  const [username, setUsername] = React.useState('');
  
  function  changeUserInfo(e , p){
    const newObj = userInfo;
    const otherObj = {...userInfo, newProp: ''};
    
  }
  const [list, setList] = 

  console.log(username);

  return (
    <React.Fragment>
        <Navbar active="login"></Navbar>
        <Container>
              <h1>Signup</h1>
              <Segment>
                <label>Email</label>
              <input placeholder="Enter your email..."></input> <br></br>
              <label>Username</label>
              <input placeholder="Enter your username..."></input> <br></br>
              <label>Password</label>
              <input placeholder="Enter your Password..."></input> <br></br>
              <label>Re-Type Password</label>
              <input placeholder="Re-type your Password..."></input> <br></br>
              <button>
                <Link t0="">Signup</Link>
              </button>
              </Segment>
            <h1>Login</h1>
              <Segment>
              <label>Username</label>
              <input placeholder="Enter your username..."></input> <br></br>
              <label>Password</label>
              <input placeholder="Enter your password..."></input> <br></br>
              <button>
                <Link t0="">Login</Link>
              </button>
              </Segment>
        </Container>
    </React.Fragment>
  );
};

export default LoginPage;