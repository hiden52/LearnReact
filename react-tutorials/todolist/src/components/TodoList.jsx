import React from "react";
import { TODAY, timeNow } from "../modules/Date";
import * as Storage from "../modules/Storage";

class Tasks extends React.Component {
	render() {
		const tasks = this.props.tasks;
		let count = 0;
		const mergedTasks = [];

		tasks.forEach((task) => {
			mergedTasks.push(
				<div className="task" key={count++}>
					<div className="hover-effect"></div>
					<span className="task-name">
						<a href="#none" role="button">
							<i className="fas fa-check-circle" />
						</a>
						{task}
					</span>
				</div>
			);
		});
		return mergedTasks;
	}
}

class TaskInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleChangeInput = this.handleChangeInput.bind(this);
		this.handleSubmitInput = this.handleSubmitInput.bind(this);
	}

	handleBtnClick() {
		this.props.onTaskPost();
	}
	handleSubmitInput(e) {
		e.preventDefault();
		this.props.onTaskPost();
	}
	handleChangeInput(e) {
		this.props.onInputChange(e.target.value);
	}

	render() {
		return (
			<form className="task-input" onSubmit={this.handleSubmitInput} >
				<input
					type="text"
					value={this.props.taskInputValue}
					onChange={this.handleChangeInput}
					
					placeholder="ToDo!"
				/>
				<button className="submit-btn" type="submit">
					+
				</button>
			</form>
		);
	}
}

class ListBox extends React.Component {
	constructor(props) {
		super(props);
		this.handlePostTask = this.handlePostTask.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handlePostTask() {
		this.props.onTaskPost();
	}
	handleInputChange(e) {
		this.props.onInputChange(e);
	}
	render() {
		return (
			<div className="todo-box">
				<Tasks
					tasks={this.props.tasks}
					isCheked={this.props.isCheked}
				/>
				<TaskInput
					onTaskPost={this.handlePostTask}
					onInputChange={this.handleInputChange}
					taskInputValue={this.props.taskInputValue}
				/>
			</div>
		);
	}
}

class Today extends React.Component {
	render() {
		return <h1 className="date-heading">{TODAY}</h1>;
	}
}
class TodoHeader extends React.Component {
	constructor(props) {
		super(props);
		//this.startClock = this.startClock.bind(this);
		this.state = {
			time: timeNow(),
		};
	}
	componentDidMount() {
		this.timeID = setInterval(() => this.startClock(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timeID);
	}
	startClock() {
		this.setState({ time: timeNow() });
	}
	render() {
		return (
			<div className="todo-header">
				<Today />
				{
					// replaced to other Component
					//<p className="clock">{this.state.time}</p>
				}
			</div>
		);
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//tasks: this.props.tasks,
			taskInputValue: ""
		};
	}

	handlePostTask = () => { 
		const postTaskValue = this.state.taskInputValue;
		this.setState({taskInputValue:""});
		this.props.onTaskPost(postTaskValue);
	};
	handleInputChange = (taskInputValue) => {
		this.setState({
			taskInputValue : taskInputValue
		});
	};
	render() {
		return (
			<div className="todo-list">
				<TodoHeader />
				<ListBox
					tasks={this.props.tasks}
					onTaskPost={this.handlePostTask}
					onInputChange={this.handleInputChange}
					taskInputValue={this.state.taskInputValue}
				/>
			</div>
		);
	}
}

export default TodoList;
