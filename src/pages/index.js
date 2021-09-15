import React from 'react';
import { Link } from 'gatsby';
import 'semantic-ui-css/semantic.css';

import Navbar from '../components/Navbar';
import {Container, Button, Segment, List} from 'semantic-ui-react';


const HomePage = () => {
  return (
    <React.Fragment>
        <div class="content">
          <Navbar active="home"></Navbar>
          <Container>
            <Segment textAlign="center">
              <h1>Plain Page</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus magna id dolor facilisis molestie. Maecenas non magna feugiat, aliquet leo ut, placerat leo. Pellentesque condimentum vestibulum magna vitae aliquet. Duis eleifend purus ac auctor hendrerit. Maecenas gravida metus sit amet lorem pellentesque lacinia. Ut quis aliquet orci. Aliquam sit amet mauris tortor. Aliquam ac aliquam dui, egestas fringilla mauris. Quisque id mi ut mi accumsan interdum. Integer eu vestibulum tellus.</p>

                <Link to="/login">
                  <Button  color="blue" content="Join US!" ></Button>
                </Link>
            </Segment>
            <div class="events">
              <h5>Upcoming Events</h5>
              <List>
                <List.Item>
                <Link to="/events/bday">10/16/21 Boss's Day</Link>
                </List.Item>
                <List.Item>
                <Link to="/events/halloween">10/31/21 All Hallow's Eve</Link>
                </List.Item>
                <List.Item>
                <Link to="/events/turkey">11/25/21 Turkey Day</Link>
                </List.Item>
              </List>
            </div>
          </Container>
          </div>
    </React.Fragment>
  );
};

export default HomePage;