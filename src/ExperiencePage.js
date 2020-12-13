import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton.js';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer'

function ExperiencePage(){
    return(
        <container>
        <Header />
        <BackButton/>
        <Banner />
        <Content>
        <Sub>
        <h5><a href="https://dev-graduate-directory.herokuapp.com/">CYF Graduate Directory</a>, England – October to November, 2020</h5>
        <p>As a part of the CYF Full Stack Web Development programme, I worked on to develop a graduate platform which would potentially help CYF graduates get hired. It is in the process of being deployed on to the official website.<br/> 
        This project helped me apply all that I learnt during the course and learn new technologies as well.
        </p>
        <p><strong>Technologies used:</strong> React, React Bootstrap, Formik, node.js, Oauth2, postgreSQL</p>
        </Sub>

        <Sub>
        <h5>Pilot a Start-up called ‘Lunchies’, Pakistan- March to November, 2016</h5>
        <p>I started a family-run start-up called ‘Lunchies’ which focused on providing homemade, hygienic and economic lunch to students and teachers.  
        <br/>This venture helped me employ the skill set I had gained during my postgraduate degree to practical use.
        </p>
        <ul>
            <li>I conducted market research through online surveys and used the results to formulate an economic pricing model.</li><br/>
            <li>I was successful in attracting customers through various marketing techniques</li><br/>
            <li>I delegated the tasks, where required, to people with the appropriate skill set.</li><br/>
            <li>I was successful in reaching the breakeven point.</li>
        </ul>
        </Sub>

        <Sub>
            <h5>Student Helper | Admissions Office, Glasgow Caledonian University, UK- April to November, 2015 </h5>
            <p>I was a part of the fast paced Student Enquiries team which was the first point of contact for various stakeholders. As a Student helper I was responsible for:</p>
            <ul>
                <li>Answering dozens of queries through telephone, emails, web forms and in person at the reception</li><br/>
                <li>Assisting admissions officers in compiling and sorting, which included printing and scanning documents, student applications</li><br/>
                <li>Organizing and maintaining applications filing system. </li><br/>                
            </ul>
            <p> The role helped me understand customer services and how to interact with different clients. It also helped polish my interpersonal, communications skills and my ability to cohesively work in a team.</p>
        </Sub>

        <Sub>
            <h5>Content Executive| MeriTaleem, Islamabad- April to August, 2014 </h5>
            <p>MeriTaleem aimed to provide a centralized online portal for university admissions to high school students in Pakistan. 
            <br/>I was responsible for:
            </p>
            <ul>
                <li>Assisting in setting up the website, which included the layout, user journey and content</li><br/> 
                <li>Setting up the blog and coming up with new ideas for the blogposts.</li><br/>
                <li>Short-listing CVs, setting up interviews, conducting Interviews and recruiting summer interns.</li><br/>
                <li>Coordinating with the team to formulate summer internship programme.</li><br/>

            </ul>
        </Sub>

        
            
        </Content>
        <Footer />
        
        </container>
    )
}

export default ExperiencePage;

const Content = styled.div`
padding-left: 50px;
`;

const Sub = styled.div `
text-align: left;
margin-right: 150px;
margin-bottom: 50px;
`;
