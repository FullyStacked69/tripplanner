import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

import MainPage from './components/MainPage/MainPage';
import ItinerariesEditPage from './components/ItineraryEditPage/ItineraryEditPage';

import { getCurrentUser } from './store/session';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <div className='page-container'>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />

        <AuthRoute exact path="/itineraries/plan" component={ItinerariesEditPage} />
        <Route path="/*" component={NotFound}/>

      </Switch>
    </div>
  );
}