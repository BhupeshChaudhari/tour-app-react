import { useState } from "react";
import "./App.css";
import data from "./Data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <>
      <div>
        <h1>Plan with Love</h1>
        <Tours tours={tours}></Tours>
      </div>
    </>
  );
}

export default App;
