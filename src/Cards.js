import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import AdditionalInfo from './AdditionalInfo'

function Cards(){
    return(
        
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col lg={true}>
                <div className = "cards-container">
                <Skills />
                <Projects />
               <Education />
               <Experience />
              <div className="card">
               <AdditionalInfo />
              </div>
              </div>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
        
          
         
    )

}

export default Cards;