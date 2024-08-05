import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  });
  return <div>{data ? <h1>{data}</h1> : <h1>Loading...</h1>}</div>;
}

export default App;
