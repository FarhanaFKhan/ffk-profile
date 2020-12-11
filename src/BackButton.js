import React from 'react';
import { useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const BackButton = ()=>{
    let history =useHistory();

    function handleClick(){
        history.push(`/`);
    }
    return(
        <div>
            <StyleButton
			onClick={handleClick}> Back
		</StyleButton>
        </div>
    )

}

export default BackButton;


const StyleButton = styled(Button)`
    height: 40px;
    width: 110px;
    border-radius: 2px;
    color:#fff;
    margin-top:11px;
    font-size:12px;
    align-self:center;
    font-weight:bold;
    font-family: Arial;
    background-color:#98FB98;
    border:none;
    transition:1.5s;
    &:hover{
        background-color:green;
        border:0.5px solid black;
    }
`;