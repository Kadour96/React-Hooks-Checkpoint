import MovieCard from "./MovieCard";

const MoviesList = ({movies,name,rating}) => {

  return (
      <div className="cardsmovie">       

        {
      movies.filter(el=>el.title.toLowerCase().includes(name.trim()) && el.rate >=rating).map((movie,i)=><MovieCard movie={movie} key={i}/>)
       
        }
      </div>

    );
   };
   export default MoviesList;