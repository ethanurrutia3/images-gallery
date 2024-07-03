import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg';
const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({title}) => {
    return (
        <Navbar style={navbarStyle}  variant="light">
            <left>
            <Container>
                <Logo style={{maxWidth: '12rem', maxHeight: '2rem'}} />
            </Container>
            </left>
            
        </Navbar>
    )
}
export default Header;