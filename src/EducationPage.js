import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton.js';
import cyf from './cyf_brand.png';
import gcu from './gcu-logo-1.png';
import nust from './nust-logo.jpg'
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer'

function EducationPage(){
    return(
        <container>
        <Header />
        <BackButton/>
        <Banner />
        <Content>
        <Cyf>
            <div><h5>Full Stack Web Developer Course|2020</h5>
            <p>Code Your Future, North-West, England </p>
            <ul>
                <li>CodeYourFuture is a not-for-profit organization which helps refugees and people from disadvantaged backgrounds to gain in-demand technical skills. <br/>
                    This eight-month long course is divided into different modules- HTML/CSS, JavaScript, React, Node.js and postreSQL. In addition to the technical skills, students are also taught personal development skills necessary for work place such as collaboration, pair programming, research, communication and presentation skills.</li><br/>
                <li><strong>Modules</strong>| HTML, CSS, JavaScript, React, Node.js, PostgreSQL<br/>
                    The syllabus can be found <a href='https://syllabus.codeyourfuture.io/' target= '_blank'> here.</a></li><br/>
                <li><strong>Final Project</strong>| <a href='https://dev-graduate-directory.herokuapp.com/' target='_blank'>CYF Graduate Directory</a>. A platform to help CYF graduates get hired.</li><br/>       
            </ul>
            </div>
            <a href='https://codeyourfuture.io/' target='_blank'><CyfImg src={cyf} alt="cyf logo"/></a>
        </Cyf>
        <Gcu>
            <div><h5>Masters of Science in International Business Management |2014-2015 | Grade: Distinction</h5>
                <p>Glasgow Caledonian University, Glasgow, Scotland </p>
                <ul>
                    <li><strong>Modules</strong>| Global Strategy: Challenges & Choices, Contemporary Issues in Business and Society, Managing People and Performance,<br/> 
                    International Economics and Finance, Brand Management, Personal and Professional Development, Research Methods </li><br/>
                    <li><strong>MSc. Thesis</strong>| The role of SMEs in achieving Economic Growth in Pakistan and Challenges encountered: A case of Service Sector | <strong>Grade: Distinction</strong></li>
                </ul>
            </div>
            <a href='https://www.gcu.ac.uk/study/courses/details/index.php/P03178/International_Business_Management/' target='_blank'><GcuImg src={gcu} alt="gcu logo"/></a>
        </Gcu>
        <Ug>
            <div><h5>Bachelors in Information & Communication Systems Engineering |2010-2014 |GPA: 2.44/4.00</h5>
                <p>National University of Sciences & Technology (NUST), Islamabad, Pakistan</p>
                <ul>
                    <li><strong>Undergraduate Project</strong>| Improving Health Awareness- a web portal for administrative purposes<br/>
                     and dissemination of information to masses through SMS via GSM modem |<strong>Grade : A</strong></li>
                </ul>
            </div>
            <a href='https://nust.edu.pk/' target='_blank'><UgImg src={nust} alt="nust logo"/></a>

        </Ug>
            
        </Content>
        <Footer />
        
        </container>
    )
}

export default EducationPage;

const Content = styled.div`
padding-left: 50px;
`;

const Cyf = styled.div `
display: flex;
`;

const CyfImg = styled.img `
width: 30%;
height: 30%;
padding-top: 25px;
margin-left: 300px;
`;

const Gcu = styled.div `
display: flex;
`;

const GcuImg = styled.img `
width: 40%;
height: 40%;
padding-top: 25px;
margin-left: 400px;
`;

const Ug = styled.div `
display: flex;
`;

const UgImg = styled.img `
width: 200px;
height: 200px;
padding-top: 25px;
margin-left: 200px;
`;