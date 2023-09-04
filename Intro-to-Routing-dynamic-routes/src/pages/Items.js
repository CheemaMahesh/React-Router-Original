import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData";
function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        {ITEMS.map((items)=>{
          return(<Link to={`/items/${items.id}`}><li>{items.title}</li>
          
          </Link>)
        })}
      </ul>
    </>
  );
}

export default Items;
