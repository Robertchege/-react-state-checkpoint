import React, { Component } from 'react';
import './App.css';


// Now define the App component as a class-based component. We're transforming the App.js into a class-based component by using the 'class' keyword and extending the 'Component' class from React.
class App extends Component {
  // Initialize the state with a Person object and inherent fields
  state = {
    // Define the Person object with fullName, bio, imgSrc, and profession fields
    person: {
      fullName: 'Diego Armando Maradona',
      bio: `0 October 1960 – 25 November 2020) was an Argentine professional football player and manager. Widely regarded as one of the greatest players in the history of the sport, he was one of the two joint winners of the FIFA Player of the 20th Century award.

      An advanced playmaker who operated in the classic number 10 position, Maradona's vision, passing, ball control, and dribbling skills were combined with his small stature, which gave him a low centre of gravity and allowed him to manoeuvre better than most other players. His presence and leadership on the field had a great effect on his team's general performance, while he would often be singled out by the opposition. In addition to his creative abilities, he possessed an eye for goal and was known to be a free kick specialist. A precocious talent, Maradona was given the nickname El Pibe de Oro ("The Golden Boy"), a name that stuck with him throughout his career.`,
      imgSrc: "pics/diego.jpg",
      profession: ' football player and manager.'
    },
    // The boolean state to toggle the display of the Person profile
    shows: false,
    // State to track the time interval since the component was mounted
    timeInterval: 0,
  };
  // A function to toggle the shows state when the button is clicked
  toggleProfile = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };
  // Lifecycle method called before the component is unmounted
  componentWillUnmount() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.intervalId);
  }
  // Render method to display the component UI
  render() {
    // Destructure the person object fields from the state
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className='App'>
        {/* Button to toggle the display of the Person profile */}
        <button onClick={this.toggleProfile}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {/* Conditionally render the Person profile based on the shows */}
        {this.state.shows && (
          <div>
            <h1>{fullName}</h1>
            {/* Display the bio with proper paragraph breaks */}
            <div 
            style={{ 
              whiteSpace: 'pre-line', 
              textAlign: 'left',
              padding: '25px',
              margin: '25px 0'
              }}>{bio}
            </div>
            <img 
            src={imgSrc} 
            alt={fullName} 
            style={{ 
              width: '400px', 
              height: '400px',                 
              paddingTop: '25px', 
              paddingBottom: "10px",
               }}
            />
            <p>{profession}</p>
          </div>
        )}
        {/* Display the time interval since the component was mounted */}
        <p>Time since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
} 

export default App;