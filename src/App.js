import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Features from "./components/features";
import BeginnersGuide from "./components/beginnersguide";
import Tokenomics from "./components/tokenomics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <Features />
      <BeginnersGuide />
      <Tokenomics />
    </div>
  );
}

export default App;
