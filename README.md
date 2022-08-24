Simpsons Quote Generator

An application that generates a random quote, image, and author name from an array upon the click of a button.

Included is a separate contact page with three hover-icon links to email me, see my Github profile, and see my linkedIn profile. These open in a separate web page.

Installation and Setup Instructions
Example:
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

yarn install

To Run Test Suite:

yarn test

To Start Server:

yarn start

To Visit App:

simpsons-app-generator.herokuapp.com

Reflection
I created this application as a fun personal project. I set out to build a quote generator using React that let the user retrieve a new quote from the TV show 'The Simpsons' on the click of the button. This project allowed me to demonstrate my current knowledge of React, Javascript, and CSS as well as expand on that knowledge through further familiarzation with relevant documentation. I started with the create-react-app boilerplate then added react-router-dom@6 and react-bootstrap.

One of the main challenges I ran into was creating responsive design that renders properly in all viewports. This led me to dive into CSS and React-Bootstrap documentation. I used two CSS-based third party apps, Hover.css and Framer Motion, for the unique hover functions and the element transitions, respectively. 

The technologies implemented in this project are React, React-Router 6.0, React-Bootstrap, Hover.css, and a significant amount of VanillaJS and CSS. I chose to use the create-react-app boilerplate to reduce initial setup time so I could invest more energy in function and design. In the next iteration I plan on optimizing this application for mobile by converting the code to fit the React Native framework.