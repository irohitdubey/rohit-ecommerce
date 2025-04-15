import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Rohit Ecommerce</title>
        <meta
          name="description"
          content="An e-commerce store built with React and Vite"
        />
      </Helmet>
      <div className="app">
        <Navbar />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
