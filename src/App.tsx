import React, { useEffect, useState } from "react";
import "./App.css";

interface Data {
  text: string;
  author: string;
}
const App: React.FC = () => {
  const [quote, setQuote] = useState<Data>();

  const getData = (): void => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let index: number = Math.floor(Math.random() * data.length);
        setQuote(data[index]);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <div>
        <p>{quote?.text}</p>
        <span>Author: {quote?.author}</span>
        <button onClick={() => getData()}>Get Quote</button>
      </div>
    </React.Fragment>
  );
};

export default App;
