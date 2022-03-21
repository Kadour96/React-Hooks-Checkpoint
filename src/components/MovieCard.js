import {Card,Button} from 'react-bootstrap';
import Star from './Star';
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
 
    return (
  <Card style={{ width: '18rem' }}>
  <Card.Img style={{width:"100%", height:"15vw"}} variant="top" src={movie.posterUrl} />
  <Card.Body>
  <Card.Title>{movie.title}</Card.Title>
  <Card.Text>
  {movie.description}
  </Card.Text>
  <Button  variant="primary">Watch it</Button>
  {/* <Star rate={movie.rate} /> */}
  {/* <ReactStars
    count={5}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
    edit={false}

    /> */}
    {/* <p>{movie.rate}</p> */}
    <Card.Text>
  {"⭐".repeat(movie.rate)}
  </Card.Text>
  </Card.Body>
  </Card>
     
    ); 
   };
   export default MovieCard;