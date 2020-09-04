import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function AdditionalInfo(){

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cbronline.com/wp-content/uploads/2017/02/Fotolia_108869632_Subscription_Monthly_M-770x590.jpg" />
  <Card.Body>
    <Card.Title>Additional Info</Card.Title>
    <Card.Text>
      A little insight into what piques my interest and what I am passionate about.
      <br/>
      <br/>
    </Card.Text>
    <Button variant="primary">More Details</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default AdditionalInfo;