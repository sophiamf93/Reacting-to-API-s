import React, { useState } from "react";
import Films from "./components/Films";
import People from "./components/People";

const App = () => {
  const [filmsLoaded, setFilmsLoaded] = useState();
  const [peopleLoaded, setPeopleLoaded] = useState();

  const loadFilms = () => {
    console.log("Films Loaded");
    setFilmsLoaded(true);
    setPeopleLoaded(false);
  };

  const loadPeople = () => {
    console.log("People Loaded");
    setFilmsLoaded(false);
    setPeopleLoaded(true);
  };

  if (filmsLoaded == true) {
    return (
      <>
        <button onClick={loadFilms}>Films</button>
        <button onClick={loadPeople}>People</button>
        <Films />
      </>
    );
  } else if (peopleLoaded == true) {
    return (
      <>
        <button onClick={loadFilms}>Films</button>
        <button onClick={loadPeople}>People</button>
        <People />
      </>
    );
  } else {
    return (
      <>
        <button onClick={loadFilms}>Films</button>
        <button onClick={loadPeople}>People</button>
        <h1>Neither are Loaded</h1>
      </>
    );
  }
};

export default App;
