import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/ProjectBox.css'

class ProjectBox extends Component {
  render() {
    return (
      <div className="box-wrapper">
        {this.props.project.map((project, i) => (
          <div key={i}>
            <h4>{project.title}</h4>
            <hr />
            <Row>
              <Col sm={5}>
                <div className="proIcon-container">
                  <img className="project-icon" src={project.icon} alt="icon" />
                </div>
              </Col>
              <Col sm={7}>
                <p>{project.description}</p>
              </Col>
            </Row>
            <Row>
              <div className="tool-container">
                {project.skill.map((icon, i) => (
                  <img key={i} className="tool-icon" src={icon} alt="tool-icon" />
                ))}
              </div>
            </Row>
          </div>
        ))}
      </div>
    )
  }
}

export default ProjectBox
