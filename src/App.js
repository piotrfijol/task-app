import React, {Component} from 'react';
import Overview from './components/Overview';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskInput: '',
      tasks: [],
      editable: false,
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggleForm() {
    this.setState(state => {
      return {
        editable: !state.editable
      }
    });
  }


  handleKeyDown(e) {
    this.setState({
      taskInput: e.target.value
    });
  }

  delete(el) {
    this.setState(state => {
      return {
        tasks: state.tasks.filter(task => task.id !== el.id)
      }
    })
  }

  handleClick(e) {
    e.preventDefault();

    this.setState((state, props) => {
      return {
        tasks: [...state.tasks, {
          name: state.taskInput,
          number: (state.tasks.length+1),
          id: `ab${state.tasks.length}c`,
        }],
        taskInput: ''
      }
    });
  }

  render() {

    const taskForm = (
      <form>
        <label htmlFor="task">Task: </label>
        <input 
          value={this.state.taskInput} 
          onChange={this.handleKeyDown} 
          type="text" 
          name="task" 
          id="task"
        />
        <button className="btn rounded-btn tick" onClick={this.handleClick} type="submit" />
    </form>
    );

    const cancelButton = <button onClick={this.toggleForm} className="cancel-btn btn btn-block">
      Cancel
    </button>

    const addButton = <button onClick={this.toggleForm} className="add-btn btn btn-block">
      Add
    </button>

    return (
      <div id="container">
        <header>
          <h1>Tasks</h1>
          <div className="btn-wrapper">
            {this.state.editable ? cancelButton : addButton}
          </div>
        </header>
        {this.state.editable ? taskForm : undefined}
        <Overview onDelete={this.delete} tasks={this.state.tasks}/>
      </div>
    );
    }
}

export default App;
