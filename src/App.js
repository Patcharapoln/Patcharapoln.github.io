import React, { Component } from 'react'
import { Element } from 'react-scroll'
import About from './components/About'
import Navbar from './components/Navbar'
import './styles/App.css'
import Skill from './components/skill/Skill';
import Project from './components/project/Project'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Element name="About">
            <About />
          </Element>
          <Element name="Skill">
            <Skill />
          </Element>
          <Element name="Project">
            <Project />
          </Element>
        </div>
      </div>
    )
  }
}

export default App
