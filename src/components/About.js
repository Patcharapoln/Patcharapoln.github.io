import React, { Component } from 'react'
import '../styles/About.css'
import profile from '../static/Mark.jpg'
import FontAwesome from 'react-fontawesome'
import { Row, Col } from 'react-bootstrap'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { title: 'Firstname', info: 'Patcharapol' },
        { title: 'Lastname', info: 'Nirunpornphutta' },
        { title: 'Nickname', info: 'Mark' },
        { title: 'School', info: 'Satit Kaset' },
        { title: 'Major', info: 'Software and Knowledge Engineering' },
        { title: 'University', info: 'Kasetsart University' }
      ]
    }
  }
  render() {
    return (
      <div className="about">
        <Row>
          <Col sm={5}>
            <div className="image-container">
              <img className="picture" src={profile} alt="Profile" />
            </div>
          </Col>
          <Col sm={7}>
            <div className="info-wrapper">
              <h2>
                <FontAwesome name="user" /> Personal Information
              </h2>
              <hr />
              <div className="info">
                {this.state.data.map((d, i) => (
                  <div key={i} className="text">
                    <Row>
                      <Col>
                        <p className="title">{d.title}</p>
                      </Col>
                      <Col>
                        <p>{d.info}</p>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About
