import React from'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';
 
const Navbar = ({active}) => {
  return(
    <React.Fragment>
        <div class="nav">
          <Menu inverted color="black" size="massive" borderless>
            <Menu.Item active={ active == 'home'}>
            <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item active={ active == 'event'}>
            <Link to="/events">Event</Link>
            </Menu.Item>
            <Menu.Item active={ active == 'login'}>
            <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
          </div>
    </React.Fragment>
    )
}; 

 export default Navbar;