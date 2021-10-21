import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Features from "./components/features";
import BeginnersGuide from "./components/beginnersguide";
import Tokenomics from "./components/tokenomics";
import PreSaleProgress from "./components/preSaleProgress";
import RoadMap from "./components/roadmap";
import WhitePaper from "./components/whitepaper";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <Features />
      <BeginnersGuide />
      <Tokenomics />
      <PreSaleProgress />
      <RoadMap />
      <WhitePaper />
      <Footer />
    </div>
  );
}

export default App;
