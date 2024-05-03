import { useState } from "react";
import "./App.css";
import data from "./Data.jsx";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);
  console.log("Inside App");
  console.log(data);

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button
          className="refresh-btn"
          onClick={() => {
            setTours(data);
          }}
        >
          {" "}
          Refresh
        </button>
      </div>
    );
  }

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <>
      <div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </>
  );
}

export default App;
