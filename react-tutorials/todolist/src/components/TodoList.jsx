import React from 'react';

class Tasks extends React.Component {
    render() {
        return ;
    }
}

class TaskInput extends React.Component {
    render() {
        return (
            <form>

            </form>
        );
    }
}
class ListBox extends React.Component {
    redner () {
        return ( 
            <div className='todo-box'>
                <Tasks />
                <TaskInput />
            </div> 
        );
    }
}

class Today extends React.Component {
    
    render() {
        return (
            <h1 className='date-heading'>{this.props.today}</h1>
        );
    }
}
class TodoHeader extends React.Component {
    render() {
        return (
            <div className='todo-header'>
                <Today />
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div className='todo-list'>
                <TodoHeader />
                <ListBox />
            </div>
        );
    }
}