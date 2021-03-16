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
							<i class="fas fa-check-circle" />
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
	}

	handleBtnClick(e) {
		this.props.onTaskBtnClick(e);
	}
	handleChangeInput(e) {
		this.props.onInputChange(e.target.value);
	}

	render() {
		return (
			<div className="task-input">
				<input
					type="text"
					value={this.props.taskInputValue}
					onChange={this.handleChangeInput}
					placeholder="ToDo!"
				/>
				<button className="submit-btn" onClick={this.handleBtnClick}>
					+
				</button>
			</div>
		);
	}
}

class ListBox extends React.Component {
	constructor(props) {
		super(props);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleBtnClick(e) {
		this.props.handleBtnClick(e);
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
					onTaskBtnClick={this.handleBtnClick}
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
			tasks: this.props.tasks,
			taskInputValue: ""
		};
	}

	handleBtnClick = () => {};
	handleInputChange = (taskInputValue) => {
		this.setState({
			taskInputValue : taskInputValue
		})
	};
	render() {
		return (
			<div className="todo-list">
				<TodoHeader />
				<ListBox
					tasks={this.state.tasks}
					handleBtnClick={this.handleBtnClick}
					onInputChange={this.handleInputChange}
					taskInputValue={this.state.taskInputValue}
				/>
			</div>
		);
	}
}

export default TodoList;
