import React from 'react';
import { Link } from 'gatsby';
import 'semantic-ui-css/semantic.css';
import Navbar from '../../components/Navbar';
import {Container, Button, Segment, List} from 'semantic-ui-react';

const EventsPage = () => {
  return (
    <React.Fragment>
        <div class="content">
        <Navbar active="event"></Navbar>
        <Container>
        <h1>Upcoming Events</h1>
          <Segment> <div class="event1">
              <h2><Link to="/events/bday">10/16/21 Boss's Day</Link></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at auctor nulla, id dignissim tortor. Ut ut vulputate tellus. Aliquam erat volutpat. Pellentesque vitae accumsan odio. Aliquam placerat porttitor orci, non euismod nulla placerat a. Morbi at pharetra nibh. Pellentesque ac fringilla odio. Donec consectetur imperdiet mattis. Maecenas id lectus lacus. In justo lorem, posuere sed augue id, blandit sodales nunc. Nam sit amet velit quis arcu molestie maximus ac non lectus. Aenean vel iaculis orci. Nunc varius eu massa at rutrum. Nullam venenatis, nisi ultrices malesuada posuere, arcu mauris ultricies est, at semper purus lectus sed arcu. Mauris consectetur convallis hendrerit.</p>
              
                <Link to="/events/bday">
                  <Button color="blue">Read More</Button>
                  </Link>
              
            </div></Segment>
            <Segment>
            <div class="event2">
              <h2><Link to="/events/halloween">10/31/21 All Hallows' Eve</Link></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at auctor nulla, id dignissim tortor. Ut ut vulputate tellus. Aliquam erat volutpat. Pellentesque vitae accumsan odio. Aliquam placerat porttitor orci, non euismod nulla placerat a. Morbi at pharetra nibh. Pellentesque ac fringilla odio. Donec consectetur imperdiet mattis. Maecenas id lectus lacus. In justo lorem, posuere sed augue id, blandit sodales nunc. Nam sit amet velit quis arcu molestie maximus ac non lectus. Aenean vel iaculis orci. Nunc varius eu massa at rutrum. Nullam venenatis, nisi ultrices malesuada posuere, arcu mauris ultricies est, at semper purus lectus sed arcu. Mauris consectetur convallis hendrerit.</p>
                <Link to="/events/halloween">
                  <Button color="blue">
                  Read More</Button></Link>
            </div>
            </Segment>
            <Segment>
            <div class="event3">
              <h2><Link to="/events/turkey">11/25/21 Turkey Day</Link></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at auctor nulla, id dignissim tortor. Ut ut vulputate tellus. Aliquam erat volutpat. Pellentesque vitae accumsan odio. Aliquam placerat porttitor orci, non euismod nulla placerat a. Morbi at pharetra nibh. Pellentesque ac fringilla odio. Donec consectetur imperdiet mattis. Maecenas id lectus lacus. In justo lorem, posuere sed augue id, blandit sodales nunc. Nam sit amet velit quis arcu molestie maximus ac non lectus. Aenean vel iaculis orci. Nunc varius eu massa at rutrum. Nullam venenatis, nisi ultrices malesuada posuere, arcu mauris ultricies est, at semper purus lectus sed arcu. Mauris consectetur convallis hendrerit.</p>
              
                <Link to="/events/turkey">
                  <Button color="blue">
                  Read More
                  </Button>
                  </Link>
            </div>
            </Segment>
        </Container>
        </div>
    </React.Fragment>
  );
};

export default EventsPage;