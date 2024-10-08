import "./App.css";
import data from "./data.js";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  const cardElements = data.map((element) => {
    return (
      <Card
        title={element.title}
        location={element.location}
        googleMapsUrl={element.googleMapsUrl}
        startDate={element.startDate}
        distance={element.distance}
        description={element.description}
        imageUrl={element.imageUrl}
      />
    );
  });
  return (
    <>
      <Header />
      <section>{cardElements}</section>
    </>
  );
}

export default App;
