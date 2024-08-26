import React from "react";
import { ShopListWrapper } from "./Components/ShoppingList/ShopListWrapper";
import './Styles/ShoppingList.css';

function App() {
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/api")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.message))
  //       .catch((err) => console.log(err));
  //   });
  //   return <div>{data ? <h1>{data}</h1> : <h1>Loading...</h1>}</div>;
  // }
  return (
    <div className="App">
      <ShopListWrapper />
    </div>
  );
}

export default App;
