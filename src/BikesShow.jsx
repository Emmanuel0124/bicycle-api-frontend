export function BikesShow(props) {
  return (
    <div>
      <h1>Bike info</h1>
      <p>Name: {props.bike.name}</p>
      <p>color: {props.bike.color}</p>
      <p>Price: {props.bike.price}</p>
    </div>
  );
}