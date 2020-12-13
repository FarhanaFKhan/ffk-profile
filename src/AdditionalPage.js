import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton.js';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer'

function AdditionalPage(){
    
    return(
        <container>
        <Header />
        <BackButton/>
        <Banner />
        <Content>
        <p><h6>I am Farhana Fatima Khan and I am an aspiring Full Stack Web Developer.</h6><br/>
        Recently I completed a full stack web development course with CYF. An opportunity I am glad I availed. 
        This course not only improved my coding skills but refined my soft skills such as time management, collaboration and working remotely.<br/>
        Through <strong>blogging</strong>, I like to share my experiences and create awareness regarding topics I am passionate about such as pre-eclampsia, premature babies, women empowerment and women in tech.<br/>
        I am a <strong>big foodie</strong> but recently I have majorly changed my eating habits. Which helped me a lot. <br/>
        I <strong>love to travel</strong>, well who doesn't? Fun fact: we drove 2000 km across Europe in 3 days.<br/>
        I <strong>love reading</strong>. It's my most favorite thing in the world. Once upon a time, when I had no other responsibilities than making sure I reached to class on time, I used to inhale books. One year I read 30 books. My personal best.<br/>
        I physically live in UK but I left my heart and soul in Islamabad, Pakistan.<br/> </p>
            
        </Content>
        <Footer />
        
        </container>
    )
}

export default AdditionalPage;

const Content = styled.div`
text-align: center;
padding-left: 50px;
padding-right:50px;
`;
