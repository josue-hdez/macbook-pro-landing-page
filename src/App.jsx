import NavBar from "./components/Navbar";
import Home from "./components/Home";
import MacBook from "./components/MacBook";
import Chip from "./components/Chip";
import Graphics from "./components/Graphics";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <MacBook />
      <Chip />
      <Graphics />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
