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
import React from "react";

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
//console.log(tasks);	// debugging code
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: Storage.initTasks(),
		};
	}

	handlePostTask = (postTaskValue) => {
		//console.log(postTaskValue);
		Storage.inputNewTask(postTaskValue);
		this.setState({
			tasks: Storage.loadTasks(),
		});
	};

	render() {
		return (
			<div className="app">
				<Clock />
				<TodoList
					tasks={this.state.tasks}
					onTaskPost={this.handlePostTask}
				/>
				<div className="clear" />
			</div>
		);
	}
}

export default App;

// 코딩의 대전제
// Consider #Readability#
