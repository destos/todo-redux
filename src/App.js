// import React, { Component } from 'react';
import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Redux TODO!</h2>
    </div>
    <p className="App-intro">
      Type some TODOs!
    </p>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
