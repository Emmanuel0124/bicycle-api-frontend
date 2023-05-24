import axios from "axios";
import { useEffect, useState } from "react"
import { BikesIndex } from "./BikesIndex"
import { BikesNew } from "./BikesNew";
import { BikesShow } from "./BikesShow";
import { Modal } from "./Modal";

export function Content() {
  const [bikes, setBikes] = useState([]);
  const [isBikesShowVisible, setIsBikesShowVisible] = useState(false);
  const [currentBike, setCurrentBike] = useState({});
  
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

  const handleShowBike = (bike) => {
    console.log("handleShowBike", bike);
    setIsBikesShowVisible(true);
    setCurrentBike(bike);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsBikesShowVisible(false);
  }


  useEffect(handleIndexBikes, []);
  
  return (
    <div>
      <BikesNew onCreateBike={handleCreateBike} />
      <BikesIndex bikes={bikes} onShowBike={handleShowBike} />
      <Modal show={isBikesShowVisible} onClose={handleClose}>
        <BikesShow bike={currentBike} />
      </Modal>
    </div>
  )
}