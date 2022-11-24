import { Navbar, Container, Nav } from 'react-bootstrap'
import { FC } from 'react'



const Navbar : FC = () =>  {
  return (
    <Navbar bg="dark" variant='dark' sticky="top" expand='md'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="120"/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        
        <Navbar.Collapse>
          <Nav className="ml-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/1">1</Nav.Link>
            <Nav.Link as={Link} to="/2">2</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container> 
    </Navbar>
  )
}

export default Navbar ;