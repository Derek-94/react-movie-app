import React from "react";
import PropTypes from "prop-types";
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"

function Food({name, rating}) {
  return (
    <div>
    <h4>l like {name}</h4>
    <h5>{rating} / 5.0 </h5>
    </div>
  );
}

let foodILike = [
  {
    id: 1,
    name: "kimchi",
    rating: 5
  },
  {
    id: 2,
    name: "pasta",
    rating: 4.8
  },
  {
    id: 3,
    name: "Coffee",
    rating: 4.5
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

// function App() {
//   return (
//     <div className="App">
//       Hello React!
//     </div>
//   );
// }

class Home extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  async componentDidMount() {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false })
  }

  render () {
    const {isLoading, movies} = this.state;
    return (
        <section className = "container">
        {isLoading ? (
          <div className = "loader">
            <span className = "loader_text">Loading...</span>
          </div>
        ) : (
          <div className ="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id} 
                year = {movie.year} 
                title = {movie.title} 
                summary = {movie.summary} 
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
        ))}
        </div>
        )}
      </section>
    );
  }
}

export default Home;
