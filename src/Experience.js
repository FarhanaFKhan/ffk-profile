import React from 'react';
import { useHistory} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';


function Experience(){
  let history = useHistory();

  function handleClick(){
    history.push(`/experience`);
  }

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://sas-production-uploads.s3.eu-west-2.amazonaws.com/article_main_img/blog/large_316058617.jpeg" />
  <Card.Body>
  <br/>
    <Card.Title>Work Experience</Card.Title>
    <Card.Text>
      Deatils of previous work experience.
      <br/>
      <br/>
      <ul>
          <li>CYF Graduate Directory</li>
          <li>Owner Small Business</li>
          <li>Student Helper</li>
          <li>Content Executive</li>
      </ul>
      <br/> 
      <br/>
    </Card.Text>
    <Buttons variant="primary" handleClick = {handleClick} name = {'Previous Experience' }></Buttons>
  </Card.Body>
</Card>
        </div>
    )
}

export default Experience;