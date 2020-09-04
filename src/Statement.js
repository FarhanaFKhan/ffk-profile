import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Statement(){
    return(
        // <div className = "statement">
        //     A confident, social-media savvy and business-minded individual, I relish any opportunity to talk about and promote what I’m passionate about, either through blogging or public speaking. 
        //     As a graduate of CodeYourFuture’s Full Stack Web Development programme, and following on from a wealth of experience in business and communications, I have a skill-set ranging from front-end frameworks like React and Bootstrap to database management in SQL.
        //     I’m seeking a position in a fast-paced environment where I can put my web development skills to use and keep learning every day.
        // </div>
        <Container>
            <Row>
            <Col sm={2}></Col>
            <Col md={8}>
            <div className="statement">
            A confident, social-media savvy and business-minded individual, I relish any opportunity to talk about and promote what I’m passionate about, either through blogging or public speaking. 
            As a graduate of CodeYourFuture’s Full Stack Web Development programme, and following on from a wealth of experience in business and communications, I have a skill-set ranging from front-end frameworks like React and Bootstrap to database management in SQL.
            I’m seeking a position in a fast-paced environment where I can put my web development skills to use and keep learning every day.
            </div>
            </Col>
            <Col sm={2}></Col>
            </Row>
        </Container>
    )

};

export default Statement;