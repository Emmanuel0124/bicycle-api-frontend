export function BikesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateBike(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Bike</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text"/>
        </div>
        <div>
          Color: <input name="color" type="text"/>
        </div>
        <div>
          price: <input name="price" type="text"/>
        </div>
        <button type="submit">Create bike</button>
      </form>
    </div>
  );
}