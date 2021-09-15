import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

const PageNotFound = () => {
  return (
    <React.Fragment>
        <div class="content">
            <Navbar></Navbar>
            <div class="header">
              <h1>Plain Page</h1>
            </div>
            <div class="textContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus magna id dolor facilisis molestie. Maecenas non magna feugiat, aliquet leo ut, placerat leo. Pellentesque condimentum vestibulum magna vitae aliquet. Duis eleifend purus ac auctor hendrerit. Maecenas gravida metus sit amet lorem pellentesque lacinia. Ut quis aliquet orci. Aliquam sit amet mauris tortor. Aliquam ac aliquam dui, egestas fringilla mauris. Quisque id mi ut mi accumsan interdum. Integer eu vestibulum tellus.</p>
            </div>
            <div class="joinbtn">
              <button>
                <Link to="/login">Join Us</Link>
              </button>
            </div>
            <div class="events">
              <h5>Upcoming Events</h5>
              <Link to="/events/Boss">10/16/21 Boss's Day</Link>
              <Link to="/events/Halloween">10/31/21 All Hallow's Eve</Link>
              <Link to="/events/Turkey">11/25/21 Turkey Day</Link>
            </div>
        </div>
    </React.Fragment>
  );
};

export default PageNotFound;