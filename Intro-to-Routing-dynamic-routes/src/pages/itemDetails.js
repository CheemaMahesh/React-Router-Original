import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails() {
  const {id}=useParams();
  const item = ITEMS.find((item) => item.id === id);
  console.log(item);
  return (
    <>
      <main>
        <h1>ItemDetails Page</h1>
      </main>
      <h2>{item.title} description</h2>
    </>
  );
}

export default ItemDetails;
