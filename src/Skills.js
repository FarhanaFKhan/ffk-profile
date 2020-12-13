import React from 'react';
import { useHistory} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';

function Skills(){
  
  let history = useHistory();

  function handleClick(){
    history.push(`/skills`);
  }

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cbronline.com/wp-content/uploads/2017/02/Fotolia_108869632_Subscription_Monthly_M-770x590.jpg" />
  <Card.Body>
    <Card.Title>Skills</Card.Title>
    <Card.Text>
      Over the years I have gained, through academics and work experience, a range of skill-set which 
      includes Communications, Interpersonal, Leadership and Organizing skills.
    </Card.Text>
    <Buttons variant="primary" handleClick = {handleClick} name = {'Skills Details' } ></Buttons>
  </Card.Body>
</Card>
        </div>
    )
}

export default Skills;