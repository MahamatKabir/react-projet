import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:40px;
background: #f12711;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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


