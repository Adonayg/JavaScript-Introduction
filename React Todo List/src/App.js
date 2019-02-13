import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: [
  
    ]
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => this.setState({todos: res.data}))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))

  }

  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res =>  this.setState({ todos: [...this.state.todos, res.data] }))
   ;
  }


  render() {
    return (
      <Router>

        <div className="App">
          <div className="header">

            <Header></Header>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
          </div>
          <Route exact path="/" render={props => (
              <React.Fragment>
                 <div className="container">
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

          </div>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          <footer className="footer">
            <p>&copy; 2019 Todo Application, Inc.</p>
          </footer>
          <script src="js/main.js"></script>
        </div>
      </Router>
    );
  }
}

const linkStyle = {
  textDecoration: "none"
}

export default App;
