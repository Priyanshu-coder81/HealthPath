import ApplySection from "./components/ApplySection";
import Benefits from "./components/Benefits";
import Documents from "./components/Documents";
import Eligibility from "./components/Elgibility";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import Scheme from "./components/Scheme";

function App() {
  return (
    <>
      <div className="overflow-hidden font-Outfit leading-8">
        <Navbar />
        <Header />
        <Resources />
        <Scheme />
        <Eligibility />
        <Documents />
        <ApplySection />
        <Benefits />
      </div>
    </>
  );
}

export default App;
