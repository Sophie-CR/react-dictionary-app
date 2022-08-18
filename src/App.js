import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container-fluid pt-1 pb-1">
      <div className="logo-container">
        <a
          href="https://phenomenal-empanada-255bed.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="View my portfolio website"
        >
          <img
            src={require("./srlogo.png")}
            alt="Sophie Rosenberg logo"
            className="img-fluid sr-logo"
          />
        </a>
      </div>
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
