import {Modal,Button,Row,Form,Col} from 'react-bootstrap';
import {useState} from "react";
  const Exemple = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const[movie,setMovie]=useState(
      {
        title: "",
        description:
          "",
        posterUrl:
          "",
        rate:"" 
      }

    );
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
  
      <>
       <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Movie Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
          <Form.Label  column lg={2}>
           Title
          </Form.Label>
          <Col>
          <Form.Control  onChange={e=>setMovie({...movie,title:e.target.value})}  type="text" placeholder="Movie Title" />
          </Col>
          </Row>
          <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""}
          onChange={e=>setMovie({...movie,description:e.target.value})} 
          />
        </div>
      </form>
      <br/>
          <Row>
          <Form.Label column lg={2}>
           PosterUrl
          </Form.Label>
          <Col>
          <Form.Control type="text" placeholder="Url" onChange={e=>setMovie({...movie,posterUrl:e.target.value})} 
/>
          </Col>
          </Row>
          <br/>
          <Row>
          <Form.Label  column lg={2}>
           Rate
          </Form.Label>
          <Col>
          <Form.Control  onChange={e=>setMovie({...movie,rate:e.target.value})}  type="text" placeholder="Rate" />
          </Col>
          </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              if(movie.title&&movie.description&&movie.posterUrl&&movie.rate){
                addMovie(movie);
                handleClose()
              } 
              }
              }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
   };
   export default Exemple;