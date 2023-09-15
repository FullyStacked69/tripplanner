import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItineraryList from '../ItineraryList/ItineraryList';
import './MainPage.css'
import { easepick } from '@easepick/bundle';
import { RangePlugin } from '@easepick/range-plugin';
import { LockPlugin } from '@easepick/lock-plugin';
import { setSearchObjRedux } from '../../store/searchObj';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ItinerarySearch from '../ItinerarySearch/ItinerarySearch';


function MainPage() {

    const dispatch = useDispatch()
    
    const searchObjRedux = useSelector(state => state.searchObj)
    const {searching} = searchObjRedux

    useEffect(()=>{
        dispatch(setSearchObjRedux({searching: false}))
    },[])

    return (
        <>
            {searching && <Redirect to='/itineraries'/> /* <ItineraryList searchObj={searchObj}/> */}
            <div id='content-container'>
                <div id='splash-section'>
                    <div id='splash-content'>
                        <div id="splash-header">
                            <h1>Travel with confidence, not guesswork.</h1>
                            <h3>Craft, refine, and navigate your adventures using real itineraries from fellow travelers</h3>
                        </div>
                        <ItinerarySearch isMainPage={true} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;