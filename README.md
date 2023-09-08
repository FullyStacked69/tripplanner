
# TripPlanner


This app streamlines the trip planning process. Just select your destination and travel dates, and it will provide you with curated itineraries created by fellow users. You have the flexibility to personalize these plans to match your preferences and schedule. Plus, you can save your customized itinerary and effortlessly share it with your travel companions. Get ready to organize remarkable journeys with ease!



[TripPlanner Live](https://tripplanner-mern-1f758b15cb93.herokuapp.com/)

**

## Technologies used:

**
In the project's technology stack, we leveraged the MERN (MongoDB, Express.js, React, Node.js) framework, which provided a robust and scalable foundation for our application. The MERN stack allowed us to efficiently manage the database, server, and client-side components of the project, ensuring a seamless user experience.

Additionally, we integrated the Google Maps API into our application to enhance location-based functionalities. This API enabled us to incorporate interactive maps, geolocation services, and geocoding capabilities, making our application more user-friendly and informative.


Top Features 



**Feature 1: Intelligent Destination Suggestions**

Our project boasts an intelligent destination suggestion system that enhances the user experience with real-time location recommendations as users type. This feature expedites destination discovery, including both cities and countries. Nevertheless, this functionality presented specific technical hurdles:

**Challenges:**

1.  **Comprehensive Destination Database:** To provide meaningful suggestions, we required an extensive, up-to-date global database of cities and countries. Maintaining such data was challenging due to its dynamic nature.
    
2.  **Real-time Suggestion:** Supplying real-time suggestions while users type demanded low-latency processing of input, necessitating a balance between responsiveness and system performance.
    

**Solutions:**

1.  **Data Compilation:** To overcome the location database challenge, we curated two distinct files containing major cities and countries worldwide. These files formed the basis for our location suggestions.
    
2.  **Efficient Asynchronous Fetching:** To deliver real-time suggestions, we employed asynchronous data fetching techniques. As users typed, our system asynchronously queried the location database, swiftly retrieving and displaying relevant suggestions. This ensured a lag-free user experience.


**Feature 2: Enhanced Google API Integration**

Our project incorporates advanced Google API integration, allowing us to tailor it to our specific needs. This feature played a vital role in displaying activity locations and seamlessly populating user itineraries during activity searches. However, this functionality brought forth its own set of technical challenges:

**Challenges:**

1.  **Customization Complexity:** Adapting the Google API to meet our precise requirements posed a significant challenge. Understanding and configuring its intricacies was an initial obstacle.
    
2.  **Dual Functionality:** We needed the Google API to serve a dual purpose - not only displaying activity locations to users but also efficiently integrating selected activities into their personalized itineraries. This required careful handling to ensure a smooth and intuitive user experience.
    

**Solutions:**

1.  **In-Depth Configuration:** To overcome the customization challenge, we delved deep into the Google API documentation, learning its nuances and functionalities. This knowledge empowered us to fine-tune the API to our specific needs.
    
2.  **Seamless Integration:** We developed a robust integration strategy that seamlessly combined the Google API's ability to showcase activity locations with the capability to add those activities directly to the user's itinerary. This solution ensures that users can effortlessly plan their trips with pinpoint precision.

In conclusion, these two features exemplify our technical prowess in seamlessly integrating the MERN stack and the Google Maps API. Despite the challenges posed by real-time location tracking and location-based search and filtering, our innovative solutions ensured the smooth and efficient operation of these critical functionalities, enhancing the overall user experience of our application.

## Snippets

The work was divided between the team members so everybody could work simultaneously.
ItineraryEditPage.js:

````JavaScript
<div id='itinerary-container'>
   <div id='itinerary-header'>
       <h2>Itinerary</h2>   
       <a>Collapse All</a>
   </div>
   <div id='itineary-days-container'>
      {itObj && itObj.days.map((day, index) => (
         <DayContainer id={`day-${index}`} key={index} day={day} index={index} map={map} setMarkersPositions={setMarkersPositions} markersPositions={markersPositions} setCenter={setCenter} />
         ))}
   </div>
</div>
````

DayContainer.js:

````JavaScript
<div id='recommended-activities-container'>
   {sampleActivities.map((sampleActivity, index) => (
      <RecommendedActivityTile  key={index} sampleActivity={sampleActivity} index={index} />
   ))}
</div>
````

ActivityContainer.js:

````JavaScript
<div className='activity-container'>
            {activities.map((activity, idx) => (
                <div key={idx}>
                {<h4>{idx+1}</h4>}
                { activity.name && <img src={activity?.photos?.[0].getUrl()}  style={{ width: '200px', height: '125px' }} />}
                    <div className='activity-description'>{activity.name ?  "" : "Activity Info"}</div>
                    {/* <img src={activity?.photos?.[0].getUrl({maxWidth:140, maxHeight:80})}   /> */}
                        <form>
                            <h3>{activity.name}</h3>
                            <p>{activity.formatted_address}</p>
                            <p>{activity.formatted_phone_number}</p>
                            {activity.rating && <p>Rating: {activity.rating}({activity.user_ratings_total})</p>}
                            {activity.name && <button onClick={(e) => clear(idx, e)}> Delete </button>}
                            {/* {activity.name && <button onClick={addActivityInfo()}> Add </button>} */}
                        </form>
                </div>

            ))}
            
        </div>
````

this code allows us to change the classname of the button every time the user clicks on it and allow us to control its style on CSS depending on it.

````JavaScript
<button  className={`like-button ${isLiked ? 'liked' : ''}`}  onClick={handleLikeClick}>
````


