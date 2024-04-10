import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import RadioContainer from "./components/radio/radio-container";
import Sidebar from "./components/sidebar/sidebar";
import ErrorDialog from "./components/error";

function App() {
  return (
    <>
      <Navbar />
      <ErrorDialog />
      <div className="structure">
        <RadioContainer />
        <Sidebar />
      </div>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
