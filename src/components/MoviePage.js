import { useParams } from 'react-router-dom';
import '../components/style.css'
const MoviePage = ({movies}) => {
  const { movieId } = useParams();
  const movie = movies.find(movie => movie.id == movieId);
  
    return (
      <>
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        <h2>  {"⭐".repeat(movie.rate)}  </h2>
 
 
        </div>
          <div className='trailerframe'>

<iframe width="560" height="315" 
src={movie.frameUrl}
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>

</div>


      </>
    );
   };
   export default MoviePage;