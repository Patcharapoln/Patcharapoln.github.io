import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/Contract.css'
import FontAwesome from 'react-fontawesome'
import github from '../static/Contract/github.png'
import pdf from '../static/Contract/pdf.png'

class Contract extends Component {
  render() {
    return (
      <div>
        <h2><FontAwesome name="phone"/> Contract</h2>
        <hr />
        <Row>
          <Col sm={2}>
            <p className="title">Address</p>
          </Col>
          <Col sm={4}>
            <p>Chatuchak, Bangkok</p>
          </Col>
          <Col sm={2}>
            <p className="title">Tel</p>
          </Col>
          <Col sm={4}>
            <p>097-073-0557</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <p className="title">E-mail</p>
          </Col>
          <Col sm={4}>
            <p>markpatcharapol@gmail.com</p>
          </Col>
          <Col sm={2}>
            <p className="title">Line ID</p>
          </Col>
          <Col sm={4}>
            <p>markpatcharapol</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="contract-button">
              <a href="https://github.com/Patcharapoln">
                <img className="button-icon" src={github} alt="Github" />
                Github
              </a>
            </button>
          </Col>
          <Col>
            <button className="contract-button">
              <a href="https://drive.google.com/uc?export=download&id=1ejUKmjExNmeO2EhZ8RVgml_3_PJLMXT4">
                <img className="button-icon" src={pdf} alt="Resume" />
                Resume
              </a>
            </button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Contract
