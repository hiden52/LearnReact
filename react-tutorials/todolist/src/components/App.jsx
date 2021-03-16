//import React from "react";
import Clock from "./Clock";
// import Page from "./Warn";
// import List from "./List";
// import NameForm from "./Form";
// import Calculator from './Calculator';
// import Composition from './Composition'
import TodoList from "./TodoList";
import * as Storage from "../modules/Storage";
import "../scss/App.scss";


// Wrong way using state
// ~~ inside function ~~
//this.state.name = 'Yujin';  // This will not re-render a component!!
// The only place where you can assign `this.state` is the Constructor !!

/// ==> this.setState({name: 'Yujin'}); // Correct way!

// const numbers = [7, 6, 4, 9 ,3, 2, 3, 12, 12 ,247  ];

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//       <Page />
//       <List numbers={numbers}/>
//       <NameForm />
//       <Calculator />
//       <Composition />
//     </div>

//   );
// }
const tasks = Storage.initTasks();
console.log(tasks);
function App() {
	return (
		<div className="app">
			<Clock />
			<TodoList tasks={tasks}/>
			<div className="clear" />
		</div>
	);
}


export default App;

// 코딩의 대전제
// Consider #Readability#
