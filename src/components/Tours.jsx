function Tours({ tours }) {
  return (
    <div>
      <div>
        <h2> Plan with Love</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card tourData={tour}></Card>;
        })}
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default Tours;
