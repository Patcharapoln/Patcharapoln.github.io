import React, { Component } from 'react'
import {Fade} from 'react-reveal';
import SkillBox from './SkillBox'
import '../../styles/Skill.css'
import FontAwesome from 'react-fontawesome'

//Web
import html from '../../static/Skills/Web/html.png'
import css from '../../static/Skills/Web/css-3.png'
import js from '../../static/Skills/Web/JS.png'
import react from '../../static/Skills/Web/React.png'
//Mobile
import swift from '../../static/Skills/Mobile/swift.png'
import java from '../../static/Skills/Mobile/java.png'
import kotlin from '../../static/Skills/Mobile/kotlin.png'
//Database
import mongo from '../../static/Skills/Other/mongo.png'
import sql from '../../static/Skills/Other/sql.png'
import firebase from '../../static/Skills/Other/firebase.png'

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web: [
        { icon: html, name: 'HTML' },
        { icon: css, name: 'CSS' },
        { icon: js, name: 'JavaScript' },
        { icon: react, name: 'React' }
      ],
      mobile: [
        { icon: java, name: 'Java' },
        { icon: kotlin, name: 'Kotlin' },
        { icon: swift, name: 'Swift' }
      ],
      database: [
        { icon: sql, name: 'mySQL' },
        { icon: mongo, name: 'MongoDB' },
        { icon: firebase, name: 'Firebase'}
      ],
      webTitle: 'Web',
      mobileTitle: 'Mobile',
      databaseTitle: 'Database'
    }
  }
  render() {
    return (
      <div className="skill-container">
        <h2>
          <FontAwesome className="skill-icon" name="book" />
          Skills
        </h2>
        <hr />
        <Fade top>
          <SkillBox element={this.state.web} title={this.state.webTitle} />
          <SkillBox element={this.state.mobile} title={this.state.mobileTitle} />
          <SkillBox element={this.state.database} title={this.state.databaseTitle} />
        </Fade>
      </div>
    )
  }
}

export default Skill
