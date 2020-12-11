import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton.js';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer'

function SkillsPage(){
    return(
        <container>
        <Header />
        <BackButton/>
        <Banner />
        <Content>
            <ul>
                <ListElement><strong>IT skills:</strong> I have worked with various software programmes and technologies including MS Office, VS code, git, GitHub, PostgreSQL, Bootstrap, React Bootstrap, Oauth2, styled-components and Node.js</ListElement><br/>
                <ListElement><strong>Organisational skills:</strong> I have always been well organised and managed time efficiently throughout my education and professional years.<br/>
                    My organisational skills helped me achieve a distinction in masters and, recently, helped me complete the eight-month long <a href ='https://syllabus.codeyourfuture.io/' target='_blank'>web development course</a>.</ListElement> <br/>
                <ListElement><strong>Communication skills:</strong> I have been a keen public speaker during my academic years, which assisted in developing and enhancing my communication skills. <br/>
                    As part of <a href= 'https://codeyourfuture.io/' target= '_blank'>CodeYourFuture’s</a> (CYF) graduation day, I presented the final project to more than 100 people over Zoom. <br/>
                    I have also participated in Model United Nations, debating and extempore speech competitions.</ListElement> <br/>
                <ListElement><strong>Interpersonal skills:</strong> I contributed towards diverse and multicultural teamwork, group tasks and event organisation, which lead to the development of my interpersonal skills.
                    <br/>I enjoy collaborating on different projects. During the CYF course, I collaborated, as part of different teams, on various projects and tasks.
</ListElement><br/>
            </ul>
        </Content>
        <Footer />
        
        </container>
    )
}

export default SkillsPage;

const Content = styled.div`
padding-left: 50px;
padding-right:50px;
`;

const ListElement = styled.li `
text-align: left;
margin-right: 100px;
`;