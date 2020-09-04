import React from 'react';
import Container from 'react-bootstrap/Container';

function Layout(props){
    return(
        <Container>
            {props.childern}
        </Container>

    )


}

export default Layout;