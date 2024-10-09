import "./App.css";
import data from "./data.js";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        distance={item.distance}
        description={item.description}
        imageUrl={item.imageUrl}
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
