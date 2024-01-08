import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
