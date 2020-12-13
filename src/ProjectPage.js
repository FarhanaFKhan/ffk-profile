import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton.js';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer'

function ProjectPage(){
    return(
        <container>
        <Header />
        <BackButton/>
        <Banner />
        <Content>
            <ul>
                <ListElement><strong>CYF Graduate Directory:</strong> As part of the CYF Full Stack Web development programme, I worked on to develop a platform for the CYF graduates in order to help them get hired.<br/>
                    <p>Graduates can make profile on the platform and potential employers can look at their information and contact them. CYF mentors can add eligible graduates to the system.</p>
                    For the front-end: React.js, React bootstrap and Formik<br/>
                    For authentication: Oauth2 and GitHub Api<br/>
                    For back-end: Node.js, postgreSQL, Nodemailer<br/>
                    <a href="https://dev-graduate-directory.herokuapp.com/">Preview</a> <strong>|</strong> <a href="https://github.com/OBakir90/cyf-final-project-pgsql-starter-kit/tree/develop">GitHub Repo</a></ListElement> <br/>

                <ListElement><strong>TV Show DOM Project:</strong> Created a TV show guide using JavaScript DOM and calling APIs <br/>
                <a href="https://cyf-farhanafkhan-tv.netlify.app/">Preview</a> <strong>|</strong> <a href="https://github.com/FarhanaFKhan/tv-show-dom-project">GitHub Repo</a> <br/>
                </ListElement> <br/>    

                <ListElement><strong>Journal Landing Page:</strong> Created a landing page using HTML and CSS.<br/>
                                    <a href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/Project-journal/blob/master/index.html">Preview</a>  <strong>|</strong> <a href="https://github.com/FarhanaFKhan/Project-journal">GitHub Repo</a></ListElement><br/>
                
                
                <ListElement><strong>Blog Landing Page:</strong> Created a landing page for a blog using HTML and CSS.<br/>
                <a href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/html-css-project/blob/master/index.html">Preview</a>  <strong>|</strong> <a href="https://github.com/FarhanaFKhan/html-css-project">GitHub Repo</a>
                
                </ListElement><br/>
            </ul>
            <p>More work can be viewed on <a href="https://github.com/FarhanaFKhan">GitHub</a></p>
        </Content>
        <Footer />
        
        </container>
    )
}

export default ProjectPage;

const Content = styled.div`
padding-left: 50px;
padding-right:50px;
`;

const ListElement = styled.li `
text-align: left;
margin-right: 100px;
`;