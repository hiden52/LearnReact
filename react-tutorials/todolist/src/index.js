import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const name = 'Wings of Liberty';
// const element = <h1>Starcraft II : {name}</h1>;

// ReactDOM.render( 
//   element,
//   document.getElementById('root')
// );


// Element Rendering

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// Function component 
function Welcome (props) {
  return <h1>Hello, {props.name}</h1>;
}

// Component with ES6 Class
class Well extends React.Component {
  
}