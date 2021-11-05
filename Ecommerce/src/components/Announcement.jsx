import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:30px;
background-color: green;
color:white;
align-item:center;
display:flex;
justify-content:center;
font-size:14px;
`
 const Announcement = () => {
    return (
        <Container>
                Hizli ve En ucuz biz de
        </Container>
    )
}

export default Announcement;


