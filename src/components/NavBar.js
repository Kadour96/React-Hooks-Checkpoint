import {Navbar,Container,Nav,Form,Button,NavDropdown,FormControl,Input } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const NavBar = ({setName,setRating}) => {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
    return (
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href=""><img src="TuniFILM.png"style={{width:"120px", height:"50px"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="" >Box Office</Nav.Link>
        <NavDropdown title="Movies" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action Movies</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Trend Movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Best 2021
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
      <Form className="d-flex">
        <FormControl
          onChange={(e)=> setName(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>

      </Form>
    </Navbar.Collapse>
  </Container>

</Navbar>

    );
   };
   export default NavBar;