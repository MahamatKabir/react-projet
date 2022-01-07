import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from './SearchBox'
import "../index.css"


const Header = () => {
    const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
        <header>
    <Navbar bg="black"  variant='dark' expand='lg' collapseOnSelect>
        <Container className="container">
        <LinkContainer to='/'>
        <Navbar.Brand ><p className="kabir">KabirShop</p></Navbar.Brand>
        </LinkContainer>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    
    <Navbar.Collapse id='basic-navbar-nav'>
    <Route render={({history}) => <SearchBox history={history}  />} />
      <Nav className="mr-auto ">
         <LinkContainer to='/cart'>
             <Nav.Link>
                 <i className="fa fa-shopping-cart"></i><a className="kabirna">Sepetim</a>
            </Nav.Link>
         </LinkContainer>
        
         {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Çikiş
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> <a className="kabirna">Giriş Yap</a>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Kullanicilar</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Ürünlar</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Siparişler</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
      </Nav>  
    </Navbar.Collapse>
    </Container> 
</Navbar>
</header>
    )
}

export default Header
