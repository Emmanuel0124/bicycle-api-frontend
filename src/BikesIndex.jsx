export function BikesIndex(props) {
  return (
    <div>
      <h1>All Bikes</h1>
      {props.bikes.map((bike) => (
        <div key={bike.id}>
          <h2>{bike.name}</h2>
          <p>Color: {bike.color}</p>
          <p>Price: {bike.price}</p>
          <button onClick={() => props.onShowBike(bike)}>More info</button>
        </div>
      ))}
    </div>
  );
}