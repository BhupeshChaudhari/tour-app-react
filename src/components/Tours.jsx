import Card from "./Card";

function Tours({ tours, removeTour }) {
  console.log("Inside Tours");
  console.log(tours);
  return (
    <div>
      <div>
        <h2> Plan with Love</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
