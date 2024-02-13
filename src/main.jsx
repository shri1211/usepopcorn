import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import TextExpand from "./components/TextExpand";
import App from './App.jsx'
import './index.css'
import CurrencyConverter from "./components/CurrencyConverter.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="green" onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <TextExpand/> */}
    {/* <CurrencyConverter/> */}
    {/* First part  */}
    <App />
    {/* if we are passing without props we use default parameter in the component  */}
    {/* second part  */}
     {/*
     <StarRating
      maxRating={5}
      className="test"
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />

    <StarRating maxRating={10} color="blue" size={30} />

    <Test   />  */}
  </React.StrictMode>
);
