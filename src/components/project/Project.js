import React, { Component } from 'react'
import ProjectBox from './ProjectBox'
import FontAwesome from 'react-fontawesome'
import amicus from '../../static/Projects/amicus.jpg'
import snake from '../../static/snake.png'
//Web
import html from '../../static/Skills/Web/html.png'
import css from '../../static/Skills/Web/css-3.png'
import js from '../../static/Skills/Web/JS.png'
import react from '../../static/Skills/Web/React.png'
import node from '../../static/Skills/Web/node.png'
//Database
import mongo from '../../static/Skills/Other/mongo.png'
import java from '../../static/Skills/Mobile/java.png'
import baby from '../../static/b.png'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Amicus: [
        {
          title: 'Amicus',
          description:
            'Group project to create an e-commerce website for selling salad. In this project, I worked as Frontend web developer and project manager.',
          icon: amicus,
          skill: [html, css, js, react, node, mongo]
        }
      ],
      Snake: [
        {
          title: 'Snake and Ladder',
          description:
            'OOP class project to create a Java program. So I decided to create an easy board game which calls "Snake and ladder" by using Java, JavaFX and Swing',
          icon: snake,
          skill: [java]
        }
      ],
      secondMom: [
        {
          title: '2nd Mom',
          description:
            'Exceed camp project which has a purpose for help parents to take care of their children by creating Iot web application. In this project, I work as frontend web developer to create a web page for this application.',
          icon: baby,
          skill: [html, css, js, node]
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>
          <FontAwesome name="code" />
          Project
        </h2>
        <hr />
        <div>
          <ProjectBox project={this.state.Amicus} />
          <ProjectBox project={this.state.Snake} />
          <ProjectBox project={this.state.secondMom} />
        </div>
      </div>
    )
  }
}

export default Project
