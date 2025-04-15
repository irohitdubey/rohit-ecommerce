import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
