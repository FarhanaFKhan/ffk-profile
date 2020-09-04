import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Projects(){

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cbronline.com/wp-content/uploads/2017/02/Fotolia_108869632_Subscription_Monthly_M-770x590.jpg" />
  <Card.Body>
    <Card.Title>Projects</Card.Title>
    <Card.Text>
      During my Full Stack web development programme with CodeYourFuture I had the opportunity to work on various front-end and back-end projects.
      <br/>
      <br/>


    </Card.Text>
    <Button variant="primary">List of Projects</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Projects;