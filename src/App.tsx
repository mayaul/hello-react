import React, {Component} from 'react';
import './App.css';
import Content from './Components/Content'
import Subject from './Components/Subject'
import Navigation from './Components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><a href="" onClick={function(e) { alert('click'); e.preventDefault(); }}>click</a></h1>
        </header>
        <Subject title="Web" sub="world wide web!!22233"></Subject>
        <Navigation></Navigation>
        <Content></Content>
      </div>
    );
  }
}

export default App;