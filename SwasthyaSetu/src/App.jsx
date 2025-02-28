import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <div className="overflow-hidden font-Outfit leading-8">
        <Navbar />
        <Header />
        <Resources />
      </div>
    </>
  );
}

export default App;
