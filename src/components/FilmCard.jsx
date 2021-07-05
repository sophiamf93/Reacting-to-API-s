import React from "react";

const FilmCard = (props) => {
  return (
    <>
      <div class="card mx-5 my-2 shadow">
        <div class="card-header">
            <h2>{props.film.title}</h2>
            </div>
        <div class="card-body">
          <p class="card-text">{props.film.description}</p>
          <p>{props.film.release_date}</p>
          <a href={props.film.url} class="btn btn-primary">
            Go To The API
          </a>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
