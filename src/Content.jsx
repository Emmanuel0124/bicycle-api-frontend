import axios from "axios";
import { useEffect, useState } from "react"
import { BikesIndex } from "./BikesIndex"

export function Content() {
  const [bikes, setBikes] = useState([]);
  const handleIndexBikes = () => {
    console.log("handleIndexBikes");
    axios.get("http://localhost:3000/bikes.json").then((response) => {
      console.log(response.data);
      setBikes(response.data);
    });
  };

  useEffect(handleIndexBikes, []);
  
  return (
    <div>
      <BikesIndex bikes={bikes} />
    </div>
  )
}