import React, { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then(res => setFilms(res))
      .catch((err) => setFilms("it broke!"))
  })

  return (
    <>
{films.map(film => (<FilmCard film={film} />))}
    </>
  )
};

export default Films;
