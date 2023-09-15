import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

import MainPage from './components/MainPage/MainPage';
import ItinerariesEditPage from './components/ItineraryEditPage/ItineraryEditPage';

import { getCurrentUser } from './store/session';
import { Route, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ItineraryList from './components/ItineraryList/ItineraryList';
import { fetchItineraries, fetchItinerary } from './store/itineraries';
import Footer from './components/Footer/Footer';
import UserPage from './components/UserPage/UserPage';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const dispatch = useDispatch();

  const searchObjRedux = useSelector(state => state.searchObj)
 
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <div className='page-container'>
      <NavBar 
        showDropdown={showDropdown} 
        setShowDropdown={setShowDropdown} 
        showLoginModal={showLoginModal} 
        setShowLoginModal={setShowLoginModal}
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
      />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path='/itineraries'>
          <ItineraryList searchObj={searchObjRedux}/>
        </Route>
        <Route exact path="/itineraries/plan" component={ItinerariesEditPage} />
        <Route exact path="/itineraries/:itineraryId/plan">
          <ItinerariesEditPage
            showLoginModal={showLoginModal} 
            setShowLoginModal={setShowLoginModal}
          />
        </Route>
        <Route exact path="/users/:userId" component={UserPage} />
        <Route path="/*" component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}