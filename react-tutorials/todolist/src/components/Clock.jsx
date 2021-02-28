import React from "react";

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
// function Welcome (props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// Component with ES6 Class
// class Well extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// // Component's name is allways PascalCase
// const element = <Welcome name="Jane" />; // User-defined component -> props = {childrenOfComponent, attributesOfComponent}
// ReactDOM.render(element, document.getElementById("root"));

// // Composing Components
// function App() {
//   return (
//     <div>
//       <Welcome name="Jack" />
//       <Welcome name="Ken" />
//       <Welcome name="Shen" />
//     </div>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("root"));

// // Extracting Components
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//           className="Avatar"
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     </div>
//   );
// }
// // Extract Avatar
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//      />
//   );
// }
// // ==>
// function CommentExtractedAvatar(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//       {/* Simplyfied Component Avatar */}
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     </div>
//   );
// }
// // Extract UserInfo component
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }
// // ==>
// function CommentExtractedUserInfo(props) {
//   return (
//     <div className="Comment">
//       {/* Simplyfied Comment even futher */}
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// !! All React components must act like pure functions with respect to their porps.

//State!

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

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }

//setInterval(tick, 1000);

// Function -> Class

// 1. extends React.Component

// class Clock extends React.Component {
//   // 2. Add 'render()' is empty method
//   // render() {}
//   // Move the body of the function into render() method
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         {/* Replace props with this.props */}
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// Clock has state
class Clock extends React.Component {
  // Add class constructor that assigns the initial this.state
  constructor(props) {
    // Class components should always call the base constructor with props
    super(props);
    this.state = {date: new Date()};
  }

  // Lifecycle methods

  // Special methods 'componentDidMount()', 'componentWillUnmount()'
  // == Lifecycle Method !!
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* Replace this.props with this.state.date */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

  // Wrong way using state
  // ~~ inside function ~~
  //this.state.name = 'Yujin';  // This will not re-render a component!!
  // The only place where you can assign `this.state` is the Constructor !!

  /// ==> this.setState({name: 'Yujin'}); // Correct way!

  export default Clock;