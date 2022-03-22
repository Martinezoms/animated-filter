/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import FilterBtn from "./components/FilterBtn";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [acitveGenre, setAcitveGenre] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    const movies = await response.json();

    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="App">
      <nav>
        <span>Zoms Design</span> <span>Latest Movies</span>
      </nav>
      <FilterBtn
        popular={popular}
        setFiltered={setFiltered}
        acitveGenre={acitveGenre}
        setAcitveGenre={setAcitveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
