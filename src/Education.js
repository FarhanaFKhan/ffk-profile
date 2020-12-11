import React from 'react';
import { useHistory} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';


function Education(){
  let history = useHistory();

  function handleClick(){
    history.push(`/education`);
  }

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
    <Buttons variant="primary" handleClick = {handleClick} name = {'Qualifications' }></Buttons>
  </Card.Body>
</Card>
        </div>
    )
}

export default Education;