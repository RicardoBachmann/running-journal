import "./App.css";
import data from "./data.js";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

console.log(data);

function App() {
  return (
    <>
      <Header />
      <Card />
    </>
  );
}

export default App;
