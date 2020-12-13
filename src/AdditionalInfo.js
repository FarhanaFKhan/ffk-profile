import React from 'react';
import { useHistory} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';


function AdditionalInfo(){
  let history = useHistory();

  function handleClick(){
    history.push(`/additional`);
  }

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i1.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2014/10/Travel-day-in-life.jpg?fit=1000%2C604&ssl=1" />
  <Card.Body>
    <Card.Title>Additional Info</Card.Title>
    <Card.Text>
      A little insight into what piques my interest and what I am passionate about.
      <br/>
      <br/>
    </Card.Text>
    <Buttons variant="primary" handleClick = {handleClick} name = {'More Details' }></Buttons>
  </Card.Body>
</Card>
        </div>
    )
}

export default AdditionalInfo;