import React, { useState } from "react";

export default function DataProvider({ render }) {
  const [data, setData] = useState([]);

  setTimeout(() => {
    setData(["Dato1", "Dato2", "Dato3"]);
  }, []);

  return <div>{render(data)}</div> 
}
