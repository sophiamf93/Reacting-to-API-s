import React from "react";

const PeopleCard = (props) => {
  return (
    <div class="card">
      <div class="card-header">
          <h2>{props.person.name}</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title">{props.person.age}</h5>
        <p class="card-text">{props.person.gender}</p>
        <a href={props.person.url} class="btn btn-primary">
         Go To The API
        </a>
      </div>
    </div>
  );
};

export default PeopleCard