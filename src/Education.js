import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Education(){

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cbronline.com/wp-content/uploads/2017/02/Fotolia_108869632_Subscription_Monthly_M-770x590.jpg" />
  <Card.Body>
    <Card.Title>Education</Card.Title>
    <Card.Text>
      A brief summary of my qualifications and courses taken over my academic years.
      <ul>
          <li>Full Stack web development course,</li>
          <li>MSc International Business Management,</li>
          <li>Bachelors in information and Communication Systems Engineering.</li>
      </ul>
    </Card.Text>
    <Button variant="primary">Qualifications</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Education;