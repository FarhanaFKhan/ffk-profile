import React from 'react';
import { useHistory} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';


function Projects(){

  let history = useHistory();

  function handleClick(){
    history.push(`/projects`);
  }

    return(
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg" />
  <Card.Body>
    <Card.Title>Projects</Card.Title>
    <Card.Text>
      During my Full Stack web development programme with CodeYourFuture I had the opportunity to work on various front-end and back-end projects.
      <br/>


    </Card.Text>
    <Buttons variant="primary"  handleClick = {handleClick} name = {'List of Projects' }></Buttons>
  </Card.Body>
</Card>
        </div>
    )
}

export default Projects;