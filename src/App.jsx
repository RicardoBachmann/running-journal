import "./App.css";
import data from "./data.js";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // spread to pass properties from item to Card as props.
      />
    );
  });
  return (
    <>
      <Header />
      <section>{cards}</section>
    </>
  );
}

export default App;
