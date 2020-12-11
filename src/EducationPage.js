import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton.js';
import cyf from './cyf_brand.png'
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
            <div><h6>Full Stack Web Developer Course|2020</h6>
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