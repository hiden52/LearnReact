import React from "react";
import { TODAY, timeNow } from "../modules/Date";

class Tasks extends React.Component {
	render() {
		const tasks = this.props.tasks;
		let count = 0;
		const mergedTasks = [];

		tasks.forEach((task) => {
			mergedTasks.push(
				<div className="task" key={count++}>
					<input
						className="task-checkbox"
						type="checkbox"
						checked={this.props.isCheked}
						onChange=""
					/>
					<span className="task-name">{task}</span>
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
	}

	handleBtnClick(e) {
		this.props.onTaskBtnClick(e);
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.taskInputValue}
					placeholder="ToDo!"
				/>
				<button className="submit-btn" onClick={this.handleBtnClick} />
			</div>
		);
	}
}

class ListBox extends React.Component {
	render() {
		return (
			<div className="todo-box">
				<Tasks
					tasks={this.props.tasks}
					isCheked={this.props.isCheked}
				/>
				<TaskInput onTaskBtnClick={this.handleBtnClick} />
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
        this.startClock = this.startClock.bind(this);
        this.state ={
            time : timeNow()
        }
    }
    componentDidMount() {
        this.timeID = setInterval(
            () => this.startClock(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    startClock() {
        this.setState({time: timeNow()});
    }
	render() {
		return (
			<div className="todo-header">
				<Today />
                <p>{this.state.time}</p>
			</div>
		);
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<div className="todo-list">
				<TodoHeader />
				<ListBox tasks={this.props.tasks} />
			</div>
		);
	}
}

export default TodoList;