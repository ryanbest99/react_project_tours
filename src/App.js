import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [places, setPlaces] = useState([]);

  const callBack = () => {
    console.log("rendered");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  };

  useEffect(callBack, []);

  return (
    <div>
      <h1>Our Tours</h1>
      <article>
        {places.map((place) => {
          console.log(place);
          const { id, name, info, image, price } = place;
          return (
            <div key={id}>
              <img src={image} alt="" className="placeImg" />
              <h4>{name}</h4>
              <h4>{price}</h4>
              <p>{info}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
}

export default App;
