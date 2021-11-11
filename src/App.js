import "./styles.css";
import Banner from "./pages/Banner.js";
import Subscription from "./pages/Subscription.js";
import Nav from "./pages/Nav.js";
import Footer from "./pages/Footer.js";
import Books from "./pages/Books.js";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Subscription />
      <Books />
      <Footer />
    </div>
  );
}
