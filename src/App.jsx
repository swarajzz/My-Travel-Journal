import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

import data from "./data";
import "./App.css";

function App() {
  const cards = data.map((item) => <Card key={item.key} item={item} />);

  return (
    <div className="container">
      <Navbar />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
