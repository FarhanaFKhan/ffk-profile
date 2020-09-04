import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Experience(){

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cbronline.com/wp-content/uploads/2017/02/Fotolia_108869632_Subscription_Monthly_M-770x590.jpg" />
  <Card.Body>
    <Card.Title>Work Experience</Card.Title>
    <Card.Text>
      Deatils of previous work experience.
      <br/>
      <br/>
      <ul>
          <li>Owner Small Business</li>
          <li>Student Helper</li>
          <li>Content Executive</li>
      </ul>
      <br/>
      <br/> 
      <br/>
    </Card.Text>
    <Button variant="primary">Previous Experience</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Experience;