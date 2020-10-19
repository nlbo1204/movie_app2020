import React from 'react';
//import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async() => {
    const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading : false});
  };

  // 처음에 render를 하면 호출되는 life sysle mothod는 componentDidMount임 
  componentDidMount(){
    this.getMovies();
    //const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  render(){
    const {isLoading, movies} = this.state; // div안에 {this.state.isLoading ?} 방식처럼 state를 계속부르지않기위해 정의내려줌
    return (
      <div>
        {isLoading ? "Loading.." : movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
            />
        ))}
      </div>
    );
  }
}

export default App;
