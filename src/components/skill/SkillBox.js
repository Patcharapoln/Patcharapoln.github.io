import React, { Component } from 'react'
import '../../styles/SkillBox.css'

class SkillBox extends Component {
  render() {
    return (
      <div className="box-wrapper">
        <h4>{this.props.title}</h4>
        <hr />
        <div className="icon-wrapper">
          {this.props.element.map((e, i) => (
            <div key={i}>
              <img className="icon" src={e.icon} alt="icon"/>
              <p className="name">{e.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SkillBox
