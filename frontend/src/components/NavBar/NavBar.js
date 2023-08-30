import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../SessionForms/LoginForm';
import SignupForm from '../SessionForms/SignupForm';

function NavBar () {
  console.log("NavBar rendered!");
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  useEffect(() => {
    console.log("showLoginModal changed to", showLoginModal);
  }, [showLoginModal]);

  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  }

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav">
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <>
          <div className="links-auth">
            <button id="login" onClick={() => setShowLoginModal(true)}>Login</button>
            <button id="signup" onClick={() => setShowSignupModal(true)}>Sign up</button>
          </div>

          {/* Modals */}
          <Modal open={showLoginModal} onClose={() => setShowLoginModal(false)}>
            <LoginForm />
          </Modal>
          <Modal open={showSignupModal} onClose={() => setShowSignupModal(false)}>
            <SignupForm />
          </Modal>
        </>
      );
    }
  }

  return (
      <div className='nav-bar-container'>
        <div className="logo-button">
          <Link to="/">
            <h2>TripPlanner</h2>
          </Link>
        </div>
        { getLinks() }
      </div> 
  );
}

export default NavBar;