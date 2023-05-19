import axios from "axios";
import { useEffect, useState } from "react"
import { BikesIndex } from "./BikesIndex"
import { BikesNew } from "./BikesNew";

export function Content() {
  const [bikes, setBikes] = useState([]);
  const handleIndexBikes = () => {
    console.log("handleIndexBikes");
    axios.get("http://localhost:3000/bikes.json").then((response) => {
      console.log(response.data);
      setBikes(response.data);
    });
  };

  const handleCreateBike = (params, successCallback) => {
    console.log("handleCreateBike", params);
    axios.post("http://localhost:3000/bikes.json", params).then((response) => {
      setBikes([...bikes, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexBikes, []);
  
  return (
    <div>
      <BikesNew onCreateBike={handleCreateBike} />
      <BikesIndex bikes={bikes} />
    </div>
  )
}