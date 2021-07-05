import React, { useState, useEffect } from "react";
import PeopleCard from "./PeopleCard";

const People = () => {
  
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then((res) => res.json())
        .then(res => setPeople(res))
        .catch((err) => setPeople("it broke!"))
    })

    return (
        <>
        {people.map(person => <PeopleCard person={person}/>)}
        </>
    )



};

export default People;