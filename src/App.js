import React from 'react';
import axios from 'axios';
import List from './List';
import './App.scss';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: { 
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false})
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <p className="loader">
            <span className="loader__text">Loading...</span>
          </p>
        ) : (
          <ul className="list">
            {movies.map((item, index) => (
              <List
                id={item.id}
                rating={item.rating}
                title={item.title}
                poster={item.medium_cover_image}
                summary={item.summary}
                key={index}
              />
            ))}
          </ul>
        )}
    </section>
    )
  }
}

export default App;
