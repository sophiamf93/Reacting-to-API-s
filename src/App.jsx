import React, { useEffect } from "react";

const App = () => {

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => console.log(res))
    }, []);

  return (
    <>
      <main className="container">
          <section className="row justify-content-center mt-5">
          <a
                href="#"
                className="btn btn-primary"
              >
                Load Films
              </a>
              {/* <h1 className="col-12 text-center">
              </h1> */}
          </section>
      </main>
    </>
  );
};

export default App;
