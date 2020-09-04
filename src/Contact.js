import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Contact(){
    return(
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col lg={true}>
                <div className = "form">
                <p>Want to reach out?</p>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
                </Form>

                </div>
                

                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
        
    )

}

export default Contact;